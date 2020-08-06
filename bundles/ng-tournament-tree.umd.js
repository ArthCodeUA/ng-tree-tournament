(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-tournament-tree', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['ng-tournament-tree'] = {}, global.ng.core, global.ng.common));
}(this, function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DoubleEliminationTreeComponent = /** @class */ (function () {
        function DoubleEliminationTreeComponent() {
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        DoubleEliminationTreeComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            this.losersBracket = this.tournament.rounds.filter((/**
             * @param {?} round
             * @return {?}
             */
            function (round) {
                return round.type === 'Loserbracket';
            }));
            this.winnersBracket = this.tournament.rounds.filter((/**
             * @param {?} round
             * @return {?}
             */
            function (round) {
                return round.type === 'Winnerbracket';
            }));
            this.final = this.tournament.rounds.filter((/**
             * @param {?} round
             * @return {?}
             */
            function (round) {
                return round.type === 'Final';
            })).shift();
        };
        DoubleEliminationTreeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngtt-double-elimination-tree',
                        template: "<div class=\"ngtt-de__container\">\r\n  <div class=\"ngtt-de__winners-bracket-wrapper\">\r\n    <ng-container *ngFor=\"let winnersround of winnersBracket\">\r\n      <!--      {{winnersround.round}}-->\r\n      <div class=\"ngtt-de__winners-round-wrapper\">\r\n        <ng-container *ngFor=\"let match of winnersround.matches\">\r\n          <div class=\"ngtt-de__winners-match-wrapper\">\r\n            <div class=\"ngtt-de__match-component-container\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: match}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ng-container>\r\n    <div class=\"ngtt-de__winners-round-wrapper\">\r\n      <div class=\"ngtt-de__finale-match-wrapper\">\r\n        <div class=\"ngtt-de__match-component-container\">\r\n          <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: final.matches[0]}\"></ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ngtt-de__losers-bracket-wrapper\">\r\n    <ng-container *ngFor=\"let losersround of losersBracket\">\r\n      <!--      {{losersround.round}}<br>-->\r\n      <div class=\"ngtt-de__losers-round-wrapper\">\r\n        <ng-container *ngFor=\"let match of losersround.matches\">\r\n          <div class=\"ngtt-de__losers-match-wrapper\">\r\n            <div class=\"ngtt-de__match-component-container\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: match}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        DoubleEliminationTreeComponent.ctorParameters = function () { return []; };
        DoubleEliminationTreeComponent.propDecorators = {
            matchTemplate: [{ type: core.Input }],
            tournament: [{ type: core.Input }]
        };
        return DoubleEliminationTreeComponent;
    }());
    if (false) {
        /** @type {?} */
        DoubleEliminationTreeComponent.prototype.matchTemplate;
        /** @type {?} */
        DoubleEliminationTreeComponent.prototype.tournament;
        /** @type {?} */
        DoubleEliminationTreeComponent.prototype.losersBracket;
        /** @type {?} */
        DoubleEliminationTreeComponent.prototype.winnersBracket;
        /** @type {?} */
        DoubleEliminationTreeComponent.prototype.final;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components = [DoubleEliminationTreeComponent];
    var NgttDoubleEliminationTreeModule = /** @class */ (function () {
        function NgttDoubleEliminationTreeModule() {
        }
        NgttDoubleEliminationTreeModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: components,
                        imports: [
                            common.CommonModule
                        ],
                        exports: components
                    },] }
        ];
        return NgttDoubleEliminationTreeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SingleEliminationTreeComponent = /** @class */ (function () {
        function SingleEliminationTreeComponent() {
        }
        /**
         * @return {?}
         */
        SingleEliminationTreeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        SingleEliminationTreeComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.hasOwnProperty('tournament') && changes.tournament.currentValue) {
                this.winnersBracket = this.tournament.rounds.filter((/**
                 * @param {?} round
                 * @return {?}
                 */
                function (round) {
                    return round.type === 'Winnerbracket';
                }));
            }
            console.log(this.winnersBracket);
            this.final = this.tournament.rounds.filter((/**
             * @param {?} round
             * @return {?}
             */
            function (round) {
                return round.type === 'Final';
            })).shift();
            console.log(this.final);
        };
        SingleEliminationTreeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngtt-single-elimination-tree',
                        template: "<div class=\"ngtt-se__container\">\r\n  <div class=\"ngtt-se__bracket-wrapper\">\r\n    <ng-container *ngFor=\"let winnersround of winnersBracket; let i = index\">\r\n      <div class=\"ngtt-se__round-wrapper\">\r\n        <ng-container *ngFor=\"let match of winnersround.matches\">\r\n          <div class=\"ngtt-se__match-wrapper\">\r\n            <div class=\"ngtt-se__match-component-container\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: match}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container>\r\n      <div class=\"ngtt-se__round-wrapper\">\r\n        <div class=\"ngtt-se__match-wrapper\">\r\n          <div class=\"ngtt-se__finale-match-wrapper\">\r\n            <div class=\"ngtt-se__finale-component-container\">\r\n              <ng-container\r\n                *ngTemplateOutlet=\"matchTemplate; context:{$implicit: final.matches[0]}\"></ng-container>\r\n            </div>\r\n            <div class=\"ngtt-se__match-component-container\" *ngIf=\"final.matches.length > 1\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: final.matches[1]}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SingleEliminationTreeComponent.ctorParameters = function () { return []; };
        SingleEliminationTreeComponent.propDecorators = {
            matchTemplate: [{ type: core.Input }],
            tournament: [{ type: core.Input }]
        };
        return SingleEliminationTreeComponent;
    }());
    if (false) {
        /** @type {?} */
        SingleEliminationTreeComponent.prototype.matchTemplate;
        /** @type {?} */
        SingleEliminationTreeComponent.prototype.tournament;
        /** @type {?} */
        SingleEliminationTreeComponent.prototype.winnersBracket;
        /** @type {?} */
        SingleEliminationTreeComponent.prototype.final;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$1 = [SingleEliminationTreeComponent];
    var NgttSingleEliminationTreeModule = /** @class */ (function () {
        function NgttSingleEliminationTreeModule() {
        }
        NgttSingleEliminationTreeModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: components$1,
                        imports: [
                            common.CommonModule
                        ],
                        exports: components$1
                    },] }
        ];
        return NgttSingleEliminationTreeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var modules = [NgttSingleEliminationTreeModule, NgttDoubleEliminationTreeModule];
    var NgTournamentTreeModule = /** @class */ (function () {
        function NgTournamentTreeModule() {
        }
        NgTournamentTreeModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: modules,
                        exports: modules
                    },] }
        ];
        return NgTournamentTreeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function NgttTournament() { }
    if (false) {
        /** @type {?} */
        NgttTournament.prototype.rounds;
    }
    /**
     * @record
     */
    function NgttRound() { }
    if (false) {
        /**
         * The type determines where in which branch to place a match.
         * SingleElimination-Trees only consist of a winnerbracket and a final
         * @type {?}
         */
        NgttRound.prototype.type;
        /** @type {?} */
        NgttRound.prototype.matches;
    }

    exports.NgTournamentTreeModule = NgTournamentTreeModule;
    exports.ɵa = NgttSingleEliminationTreeModule;
    exports.ɵb = SingleEliminationTreeComponent;
    exports.ɵc = NgttDoubleEliminationTreeModule;
    exports.ɵd = DoubleEliminationTreeComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ng-tournament-tree.umd.js.map
