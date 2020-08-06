import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DoubleEliminationTreeComponent {
    constructor() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.losersBracket = this.tournament.rounds.filter((/**
         * @param {?} round
         * @return {?}
         */
        round => {
            return round.type === 'Loserbracket';
        }));
        this.winnersBracket = this.tournament.rounds.filter((/**
         * @param {?} round
         * @return {?}
         */
        round => {
            return round.type === 'Winnerbracket';
        }));
        this.final = this.tournament.rounds.filter((/**
         * @param {?} round
         * @return {?}
         */
        round => {
            return round.type === 'Final';
        })).shift();
    }
}
DoubleEliminationTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngtt-double-elimination-tree',
                template: "<div class=\"ngtt-de__container\">\r\n  <div class=\"ngtt-de__winners-bracket-wrapper\">\r\n    <ng-container *ngFor=\"let winnersround of winnersBracket\">\r\n      <!--      {{winnersround.round}}-->\r\n      <div class=\"ngtt-de__winners-round-wrapper\">\r\n        <ng-container *ngFor=\"let match of winnersround.matches\">\r\n          <div class=\"ngtt-de__winners-match-wrapper\">\r\n            <div class=\"ngtt-de__match-component-container\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: match}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ng-container>\r\n    <div class=\"ngtt-de__winners-round-wrapper\">\r\n      <div class=\"ngtt-de__finale-match-wrapper\">\r\n        <div class=\"ngtt-de__match-component-container\">\r\n          <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: final.matches[0]}\"></ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ngtt-de__losers-bracket-wrapper\">\r\n    <ng-container *ngFor=\"let losersround of losersBracket\">\r\n      <!--      {{losersround.round}}<br>-->\r\n      <div class=\"ngtt-de__losers-round-wrapper\">\r\n        <ng-container *ngFor=\"let match of losersround.matches\">\r\n          <div class=\"ngtt-de__losers-match-wrapper\">\r\n            <div class=\"ngtt-de__match-component-container\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: match}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
DoubleEliminationTreeComponent.ctorParameters = () => [];
DoubleEliminationTreeComponent.propDecorators = {
    matchTemplate: [{ type: Input }],
    tournament: [{ type: Input }]
};
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
const components = [DoubleEliminationTreeComponent];
class NgttDoubleEliminationTreeModule {
}
NgttDoubleEliminationTreeModule.decorators = [
    { type: NgModule, args: [{
                declarations: components,
                imports: [
                    CommonModule
                ],
                exports: components
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SingleEliminationTreeComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('tournament') && changes.tournament.currentValue) {
            this.winnersBracket = this.tournament.rounds.filter((/**
             * @param {?} round
             * @return {?}
             */
            round => {
                return round.type === 'Winnerbracket';
            }));
        }
        console.log(this.winnersBracket);
        this.final = this.tournament.rounds.filter((/**
         * @param {?} round
         * @return {?}
         */
        round => {
            return round.type === 'Final';
        })).shift();
        console.log(this.final);
    }
}
SingleEliminationTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngtt-single-elimination-tree',
                template: "<div class=\"ngtt-se__container\">\r\n  <div class=\"ngtt-se__bracket-wrapper\">\r\n    <ng-container *ngFor=\"let winnersround of winnersBracket; let i = index\">\r\n      <div class=\"ngtt-se__round-wrapper\">\r\n        <ng-container *ngFor=\"let match of winnersround.matches\">\r\n          <div class=\"ngtt-se__match-wrapper\">\r\n            <div class=\"ngtt-se__match-component-container\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: match}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container>\r\n      <div class=\"ngtt-se__round-wrapper\">\r\n        <div class=\"ngtt-se__match-wrapper\">\r\n          <div class=\"ngtt-se__finale-match-wrapper\">\r\n            <div class=\"ngtt-se__finale-component-container\">\r\n              <ng-container\r\n                *ngTemplateOutlet=\"matchTemplate; context:{$implicit: final.matches[0]}\"></ng-container>\r\n            </div>\r\n            <div class=\"ngtt-se__match-component-container\" *ngIf=\"final.matches.length > 1\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: final.matches[1]}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
SingleEliminationTreeComponent.ctorParameters = () => [];
SingleEliminationTreeComponent.propDecorators = {
    matchTemplate: [{ type: Input }],
    tournament: [{ type: Input }]
};
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
const components$1 = [SingleEliminationTreeComponent];
class NgttSingleEliminationTreeModule {
}
NgttSingleEliminationTreeModule.decorators = [
    { type: NgModule, args: [{
                declarations: components$1,
                imports: [
                    CommonModule
                ],
                exports: components$1
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const modules = [NgttSingleEliminationTreeModule, NgttDoubleEliminationTreeModule];
class NgTournamentTreeModule {
}
NgTournamentTreeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: modules,
                exports: modules
            },] }
];

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgTournamentTreeModule, NgttSingleEliminationTreeModule as ɵa, SingleEliminationTreeComponent as ɵb, NgttDoubleEliminationTreeModule as ɵc, DoubleEliminationTreeComponent as ɵd };
//# sourceMappingURL=ng-tournament-tree.js.map
