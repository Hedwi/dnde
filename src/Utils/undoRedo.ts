import _ from 'lodash';

class UndoRedo {
  undo: any[];
  redo: any[];

  constructor() {
    this.undo = [];
    this.redo = [];
  }

  public newAction(action: any) {
    if (this.undo.length > 0 && _.isEqual(action, this.peekUndo())) {
      console.log('undoredo: prev action and new action are same, not performing action');
      return;
    }
    this.undo.push(this.copy(action));
    this.redo = [];
  }

  public undoAction(current: any = false): any {
    if (this.undo.length < 1) {
      return false;
    }

    const itemToApply = this.copy(this.undo.pop());
    this.redo.push(itemToApply);

    if (current && _.isEqual(itemToApply, current)) {
      console.log('undoredo: undo action but view and current are same, proceeding one more step');
      return this.undoAction(current);
    }

    return itemToApply;
  }

  public redoAction(current: any = false): any {
    if (this.redo.length < 1) {
      return false;
    }

    const itemToApply = this.copy(this.redo.pop());
    this.undo.push(itemToApply);
    if (current && _.isEqual(itemToApply, current)) {
      console.log('undoredo: redo action but view and current are same, proceeding one more step');
      return this.redoAction(current);
    }
    return itemToApply;
  }

  public peekUndo() {
    let peek: any | boolean = false;
    if (this.undo.length > 0) {
      peek = this.copy(this.undo[this.undo.length - 1]);
    }
    return peek;
  }

  public peekRedo() {
    let peek: any | boolean = false;
    if (this.redo.length > 0) {
      peek = this.redo[this.redo.length - 1];
    }
    return peek;
  }

  public isUndoEmpty() {
    return this.undo.length === 0;
  }

  public isRedoEmpty() {
    return this.redo.length === 0;
  }

  public print() {
    console.log('undoredo: ', this.undo, this.redo);
  }

  private copy(item: any) {
    return _.cloneDeep(item);
  }
}

var UNDOREDO = new UndoRedo();

(window as any).UNDOREO = UNDOREDO;

export { UNDOREDO };