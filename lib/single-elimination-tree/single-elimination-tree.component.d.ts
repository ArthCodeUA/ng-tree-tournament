import { OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NgttRound, NgttTournament } from '../declarations/interfaces';
import * as ɵngcc0 from '@angular/core';
export declare class SingleEliminationTreeComponent implements OnInit, OnChanges {
    matchTemplate: TemplateRef<any>;
    tournament: NgttTournament;
    winnersBracket: NgttRound[];
    final: NgttRound;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SingleEliminationTreeComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SingleEliminationTreeComponent, "ngtt-single-elimination-tree", never, { "matchTemplate": "matchTemplate"; "tournament": "tournament"; }, {}, never, never>;
}

//# sourceMappingURL=single-elimination-tree.component.d.ts.map