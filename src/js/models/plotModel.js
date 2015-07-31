/**
 * @fileoverview PlotModel is model for management of plot data.
 *               Plot data used to draw the plot area.
 * @author NHN Ent.
 *         FE Development Team <dl_javascript@nhnent.com>
 */

'use strict';

var Model = require('./model.js');

var PlotModel = ne.util.defineClass(Model, /** @lends PlotModel.prototype */ {
    /**
     * PlotModel is model for management of plot data.
     * Plot data used to draw the plot area.
     * @constructs PlotModel
     * @extends Model
     * @param {data} data plot data
     */
    init: function(data) {
        /**
         * Vertical tick count
         * @type {number}
         */
        this.vTickCount = 0;

        /**
         * Horizontal tick count
         * @type {number}
         */
        this.hTickCount = 0;

        if (data) {
            this._setData(data);
        }
    },

    /**
     * Set plot data.
     * @param {{vTickCount: number, hTickCount: number}} data plot data
     * @private
     */
    _setData: function(data) {
        this.vTickCount = data.vTickCount || 0;
        this.hTickCount = data.hTickCount || 0;
    },

    /**
     * makes vertical pixel positions
     * @param {number} height plot height
     * @returns {array.<object>} positions
     */
    makeVPixelPositions: function(height) {
        var positions = this.makePixelPositions(height, this.vTickCount);
        positions.shift();
        return positions;
    },

    /**
     * makes horizontal pixel position
     * @param {number} width plot width
     * @returns {array.<object>} positions
     */
    makeHPixelPositions: function(width) {
        var positions = this.makePixelPositions(width, this.hTickCount);
        positions.shift();
        return positions;
    }
});

module.exports = PlotModel;