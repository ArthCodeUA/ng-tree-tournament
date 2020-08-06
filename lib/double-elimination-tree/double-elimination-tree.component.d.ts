import { OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { NgttRound, NgttTournament } from '../declarations/interfaces';
import * as ɵngcc0 from '@angular/core';
export declare class DoubleEliminationTreeComponent implements OnChanges {
    matchTemplate: TemplateRef<any>;
    tournament: NgttTournament;
    losersBracket: NgttRound[];
    winnersBracket: NgttRound[];
    final: NgttRound;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DoubleEliminationTreeComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DoubleEliminationTreeComponent, "ngtt-double-elimination-tree", never, { "matchTemplate": "matchTemplate"; "tournament": "tournament"; }, {}, never, never>;
}

//# sourceMappingURL=double-elimination-tree.component.d.ts.map