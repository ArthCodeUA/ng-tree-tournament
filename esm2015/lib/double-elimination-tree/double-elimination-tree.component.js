/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
export class DoubleEliminationTreeComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG91YmxlLWVsaW1pbmF0aW9uLXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdG91cm5hbWVudC10cmVlLyIsInNvdXJjZXMiOlsibGliL2RvdWJsZS1lbGltaW5hdGlvbi10cmVlL2RvdWJsZS1lbGltaW5hdGlvbi10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQTRCLFdBQVcsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVF0RixNQUFNLE9BQU8sOEJBQThCO0lBUXpDO0lBQ0EsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekQsT0FBTyxLQUFLLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQztRQUN2QyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFELE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxlQUFlLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNqRCxPQUFPLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO1FBQ2hDLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQzs7O1lBMUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxncURBQXVEOzthQUV4RDs7Ozs7NEJBRUUsS0FBSzt5QkFDTCxLQUFLOzs7O0lBRE4sdURBQXlDOztJQUN6QyxvREFBb0M7O0lBRXBDLHVEQUFrQzs7SUFDbEMsd0RBQW1DOztJQUNuQywrQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge05ndHRSb3VuZCwgTmd0dFRvdXJuYW1lbnR9IGZyb20gJy4uL2RlY2xhcmF0aW9ucy9pbnRlcmZhY2VzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd0dC1kb3VibGUtZWxpbWluYXRpb24tdHJlZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RvdWJsZS1lbGltaW5hdGlvbi10cmVlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kb3VibGUtZWxpbWluYXRpb24tdHJlZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEb3VibGVFbGltaW5hdGlvblRyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG1hdGNoVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KCkgdG91cm5hbWVudDogTmd0dFRvdXJuYW1lbnQ7XHJcblxyXG4gIHB1YmxpYyBsb3NlcnNCcmFja2V0OiBOZ3R0Um91bmRbXTtcclxuICBwdWJsaWMgd2lubmVyc0JyYWNrZXQ6IE5ndHRSb3VuZFtdO1xyXG4gIHB1YmxpYyBmaW5hbDogTmd0dFJvdW5kO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIHRoaXMubG9zZXJzQnJhY2tldCA9IHRoaXMudG91cm5hbWVudC5yb3VuZHMuZmlsdGVyKHJvdW5kID0+IHtcclxuICAgICAgcmV0dXJuIHJvdW5kLnR5cGUgPT09ICdMb3NlcmJyYWNrZXQnO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLndpbm5lcnNCcmFja2V0ID0gdGhpcy50b3VybmFtZW50LnJvdW5kcy5maWx0ZXIocm91bmQgPT4ge1xyXG4gICAgICByZXR1cm4gcm91bmQudHlwZSA9PT0gJ1dpbm5lcmJyYWNrZXQnO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmZpbmFsID0gdGhpcy50b3VybmFtZW50LnJvdW5kcy5maWx0ZXIocm91bmQgPT4ge1xyXG4gICAgICByZXR1cm4gcm91bmQudHlwZSA9PT0gJ0ZpbmFsJztcclxuICAgIH0pLnNoaWZ0KCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=