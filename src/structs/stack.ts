
class Stack<T> extends Array<T> {
  // constructor (length: number);
  // constructor (...args: T[]);
  // constructor (...largs: number[] | T[]) {
  //   if (largs.length === 1 && typeof largs.at(0) === 'number') {
  //     super(largs.at(0) as number);
  //   } else if(largs.length > 1) {
  //     const args = largs as T[];
  //     super(...args);
  //   } else {
  //     super();
  //   }
  // }

  static isStack (arg: any): boolean {
    return arg instanceof Stack;
  }

  empty (): boolean {
    return this.length === 0;
  }

  peek (): T | undefined {
    return this.at(-1);
  }

  search (arg: T): number | undefined {
    const index = this.lastIndexOf(arg);

    if (index === -1 && !this.includes(arg)) {
      return;
    }
    return index;
  }

  copy (): T[] {
    // This is new in ES2022
    return structuredClone(this);
  }

  public get first (): T | undefined {
    return this.at(0);
  }
  public get last (): T | undefined {
    return this.at(-1);
  }
  public get bottom (): T | undefined {
    return this.at(0);
  }
  public get top (): T | undefined {
    return this.at(-1);
  }
}

export {
  Stack
};