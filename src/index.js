/**
 * If the page isn't within an iframe, then redirect to the page that is suppose to host the iframe
 *
 * @param {Object} options
 * @param {string} options.hostLocation - The
 * @param {string|function} options.redirectLocation - The URL to redirect to, defaults to options.hostLocation
 * @param {string|RegExp|function({string}, {object}, {object})} options.matcher - Tests if the parent URL is correct, defaults to options.hostLocation
 */
function iframeBoxer(options) {
    options = options || {};
    const hostLocation = options.hostLocation;
    const redirectLocation = options.redirectLocation || hostLocation;
    const matcher = options.matcher || hostLocation;

    function doesLocationMatch() {
        if (typeof matcher === 'function') {
            return matcher(window.document.referrer, window.location, options);

        } else if (matcher instanceof RegExp) {
            return window.location.match(matcher);

        } else {
            return window.document.referrer === matcher || window.top.location === matcher;
        }
    }

    if (window.top === window.self && !doesLocationMatch()) {
        if (typeof redirectLocation === 'function') {
            window.location = redirectLocation(window.document.referrer, window.location, options);
        } else {
            window.location = redirectLocation;
        }

    }
}

module.exports = iframeBoxer;