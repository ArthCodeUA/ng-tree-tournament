# NgTournamentTree

Tournament-Tree render components for Angular. Includes single- and double-elimination trees with full scss configuration. You can also customize how a match is displayed by providing your own component.

## Preview

 [Launch preview on Stackblitz](https://ng-tournament-tree.stackblitz.io)

## How To Use

 * Import `NgTournamentTreeModule` into your module. You can also import a single tree component by using `NgttSingleEliminationTree` or `NgttDoubleEliminationTree`.
 
 * Import `@import '~ng-tournament-tree/styles/ngtt-styles'` into your `styles.scss` file.
 
## Styles configuration

 * Create a separate `my-tree-configuration.scss` styles file.
 
 * Add `@import '~ng-tournament-tree/styles/ngtt-styles'` into your new stylesheet.
 
 * Overwrite the values you want to change.
 
 * Import your own variables file before importing `ngtt-styles.scss` in your main `styles.scss`
 
 **styles.scss**
 ```scss
 @import 'my-tree-configuration';
 @import '~ng-tournament-tree/styles/ngtt-styles';
 
 // other imports
 ```

## Adding a Match-Display Component

 * Create a new component e.g. `my-match.component`
 
 * Your component should have one input of type `NgttMatch`
 
 * Create a templateRef to your component
 
 **app.component.html**
  ```html
  <ngtt-single-elimination-tree 
    [tournament]="myTournamentData" 
    [matchTemplate]="myMatchTemplate">
  </ngtt-single-elimination-tree>
  
  <ng-template #myMatchTemplate let-match>
    <my-match [match]="match"></my-match>
  </ng-template>
  ```
  
  The Tournament-Tree components will provide the match to render as `$implicit` value to your templateRef.
  
## Data Model

```typescript
export interface NgttTournament {
  rounds: NgttRound[];
}

export interface NgttRound {
  /**
   * The type determines in which branch to place a match.
   * SingleElimination-Trees only consist of a Winnerbracket and a Final-Bracket
   */
  type: 'Winnerbracket' | 'Loserbracket' | 'Final';
  matches: any[];
}
```

The Tree-Components render the matches in the order they appear in the `matches`-Array.
