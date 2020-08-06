/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
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
        { type: Component, args: [{
                    selector: 'ngtt-single-elimination-tree',
                    template: "<div class=\"ngtt-se__container\">\r\n  <div class=\"ngtt-se__bracket-wrapper\">\r\n    <ng-container *ngFor=\"let winnersround of winnersBracket; let i = index\">\r\n      <div class=\"ngtt-se__round-wrapper\">\r\n        <ng-container *ngFor=\"let match of winnersround.matches\">\r\n          <div class=\"ngtt-se__match-wrapper\">\r\n            <div class=\"ngtt-se__match-component-container\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: match}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container>\r\n      <div class=\"ngtt-se__round-wrapper\">\r\n        <div class=\"ngtt-se__match-wrapper\">\r\n          <div class=\"ngtt-se__finale-match-wrapper\">\r\n            <div class=\"ngtt-se__finale-component-container\">\r\n              <ng-container\r\n                *ngTemplateOutlet=\"matchTemplate; context:{$implicit: final.matches[0]}\"></ng-container>\r\n            </div>\r\n            <div class=\"ngtt-se__match-component-container\" *ngIf=\"final.matches.length > 1\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: final.matches[1]}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SingleEliminationTreeComponent.ctorParameters = function () { return []; };
    SingleEliminationTreeComponent.propDecorators = {
        matchTemplate: [{ type: Input }],
        tournament: [{ type: Input }]
    };
    return SingleEliminationTreeComponent;
}());
export { SingleEliminationTreeComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLWVsaW1pbmF0aW9uLXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdG91cm5hbWVudC10cmVlLyIsInNvdXJjZXMiOlsibGliL3NpbmdsZS1lbGltaW5hdGlvbi10cmVlL3NpbmdsZS1lbGltaW5hdGlvbi10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW9DLFdBQVcsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUc5RjtJQVlFO0lBQ0EsQ0FBQzs7OztJQUVELGlEQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7O0lBRUQsb0RBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRTtZQUMzRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ3ZELE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxlQUFlLENBQUM7WUFDeEMsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsS0FBSztZQUM5QyxPQUFPLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO1FBQ2hDLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Z0JBN0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4Qyw0MkNBQXVEOztpQkFFeEQ7Ozs7O2dDQUVFLEtBQUs7NkJBQ0wsS0FBSzs7SUF3QlIscUNBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTFCWSw4QkFBOEI7OztJQUN6Qyx1REFBeUM7O0lBQ3pDLG9EQUFvQzs7SUFFcEMsd0RBQW1DOztJQUNuQywrQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Tmd0dFJvdW5kLCBOZ3R0VG91cm5hbWVudH0gZnJvbSAnLi4vZGVjbGFyYXRpb25zL2ludGVyZmFjZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3R0LXNpbmdsZS1lbGltaW5hdGlvbi10cmVlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2luZ2xlLWVsaW1pbmF0aW9uLXRyZWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpbmdsZS1lbGltaW5hdGlvbi10cmVlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpbmdsZUVsaW1pbmF0aW9uVHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBtYXRjaFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpIHRvdXJuYW1lbnQ6IE5ndHRUb3VybmFtZW50O1xyXG5cclxuICBwdWJsaWMgd2lubmVyc0JyYWNrZXQ6IE5ndHRSb3VuZFtdO1xyXG4gIHB1YmxpYyBmaW5hbDogTmd0dFJvdW5kO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3RvdXJuYW1lbnQnKSAmJiBjaGFuZ2VzLnRvdXJuYW1lbnQuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRoaXMud2lubmVyc0JyYWNrZXQgPSB0aGlzLnRvdXJuYW1lbnQucm91bmRzLmZpbHRlcihyb3VuZCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJvdW5kLnR5cGUgPT09ICdXaW5uZXJicmFja2V0JztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLndpbm5lcnNCcmFja2V0KTtcclxuICAgIHRoaXMuZmluYWwgPSB0aGlzLnRvdXJuYW1lbnQucm91bmRzLmZpbHRlcihyb3VuZCA9PiB7XHJcbiAgICAgIHJldHVybiByb3VuZC50eXBlID09PSAnRmluYWwnO1xyXG4gICAgfSkuc2hpZnQoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZmluYWwpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19