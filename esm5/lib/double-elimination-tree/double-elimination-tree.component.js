/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
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
        { type: Component, args: [{
                    selector: 'ngtt-double-elimination-tree',
                    template: "<div class=\"ngtt-de__container\">\r\n  <div class=\"ngtt-de__winners-bracket-wrapper\">\r\n    <ng-container *ngFor=\"let winnersround of winnersBracket\">\r\n      <!--      {{winnersround.round}}-->\r\n      <div class=\"ngtt-de__winners-round-wrapper\">\r\n        <ng-container *ngFor=\"let match of winnersround.matches\">\r\n          <div class=\"ngtt-de__winners-match-wrapper\">\r\n            <div class=\"ngtt-de__match-component-container\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: match}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ng-container>\r\n    <div class=\"ngtt-de__winners-round-wrapper\">\r\n      <div class=\"ngtt-de__finale-match-wrapper\">\r\n        <div class=\"ngtt-de__match-component-container\">\r\n          <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: final.matches[0]}\"></ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ngtt-de__losers-bracket-wrapper\">\r\n    <ng-container *ngFor=\"let losersround of losersBracket\">\r\n      <!--      {{losersround.round}}<br>-->\r\n      <div class=\"ngtt-de__losers-round-wrapper\">\r\n        <ng-container *ngFor=\"let match of losersround.matches\">\r\n          <div class=\"ngtt-de__losers-match-wrapper\">\r\n            <div class=\"ngtt-de__match-component-container\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: match}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DoubleEliminationTreeComponent.ctorParameters = function () { return []; };
    DoubleEliminationTreeComponent.propDecorators = {
        matchTemplate: [{ type: Input }],
        tournament: [{ type: Input }]
    };
    return DoubleEliminationTreeComponent;
}());
export { DoubleEliminationTreeComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG91YmxlLWVsaW1pbmF0aW9uLXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdG91cm5hbWVudC10cmVlLyIsInNvdXJjZXMiOlsibGliL2RvdWJsZS1lbGltaW5hdGlvbi10cmVlL2RvdWJsZS1lbGltaW5hdGlvbi10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQTRCLFdBQVcsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd0RjtJQWFFO0lBQ0EsQ0FBQzs7Ozs7SUFFRCxvREFBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ3RELE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxjQUFjLENBQUM7UUFDdkMsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLEtBQUs7WUFDdkQsT0FBTyxLQUFLLENBQUMsSUFBSSxLQUFLLGVBQWUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsS0FBSztZQUM5QyxPQUFPLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO1FBQ2hDLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQzs7Z0JBMUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxncURBQXVEOztpQkFFeEQ7Ozs7O2dDQUVFLEtBQUs7NkJBQ0wsS0FBSzs7SUFxQlIscUNBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQXZCWSw4QkFBOEI7OztJQUN6Qyx1REFBeUM7O0lBQ3pDLG9EQUFvQzs7SUFFcEMsdURBQWtDOztJQUNsQyx3REFBbUM7O0lBQ25DLCtDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Tmd0dFJvdW5kLCBOZ3R0VG91cm5hbWVudH0gZnJvbSAnLi4vZGVjbGFyYXRpb25zL2ludGVyZmFjZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3R0LWRvdWJsZS1lbGltaW5hdGlvbi10cmVlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZG91YmxlLWVsaW1pbmF0aW9uLXRyZWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RvdWJsZS1lbGltaW5hdGlvbi10cmVlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERvdWJsZUVsaW1pbmF0aW9uVHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbWF0Y2hUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKSB0b3VybmFtZW50OiBOZ3R0VG91cm5hbWVudDtcclxuXHJcbiAgcHVibGljIGxvc2Vyc0JyYWNrZXQ6IE5ndHRSb3VuZFtdO1xyXG4gIHB1YmxpYyB3aW5uZXJzQnJhY2tldDogTmd0dFJvdW5kW107XHJcbiAgcHVibGljIGZpbmFsOiBOZ3R0Um91bmQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgdGhpcy5sb3NlcnNCcmFja2V0ID0gdGhpcy50b3VybmFtZW50LnJvdW5kcy5maWx0ZXIocm91bmQgPT4ge1xyXG4gICAgICByZXR1cm4gcm91bmQudHlwZSA9PT0gJ0xvc2VyYnJhY2tldCc7XHJcbiAgICB9KTtcclxuICAgIHRoaXMud2lubmVyc0JyYWNrZXQgPSB0aGlzLnRvdXJuYW1lbnQucm91bmRzLmZpbHRlcihyb3VuZCA9PiB7XHJcbiAgICAgIHJldHVybiByb3VuZC50eXBlID09PSAnV2lubmVyYnJhY2tldCc7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZmluYWwgPSB0aGlzLnRvdXJuYW1lbnQucm91bmRzLmZpbHRlcihyb3VuZCA9PiB7XHJcbiAgICAgIHJldHVybiByb3VuZC50eXBlID09PSAnRmluYWwnO1xyXG4gICAgfSkuc2hpZnQoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==