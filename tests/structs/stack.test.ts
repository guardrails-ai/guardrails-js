import each from 'jest-each';
import { describe, expect, it } from '@jest/globals';
import { Stack } from '../../src/structs/stack.js';


describe('Stack', () => {
  describe('empty', () => {
    // @ts-ignore
    each(
      [
        [new Stack(1, 2, 3), false],
        [new Stack(), true]
      ]
    ).it('on %p returns %s', (stack: Stack<number>, expectedValue: boolean) => {
      const result = stack.empty();

      expect(result).toEqual(expectedValue);
    });
  });


  describe('peek', () => {
    // @ts-ignore
    each(
      [
        [new Stack(1, 2, 3), 3],
        [new Stack(), undefined]
      ]
    ).it('on %p returns %s', (stack: Stack<number>, expectedValue?: number) => {
      const elem = stack.peek();

      expect(elem).toEqual(expectedValue);
    });
  });


  describe('search', () => {
    // @ts-ignore
    each(
      [
        [1, 0],
        [2, 4],
        [3, 5],
        [5, undefined]
      ]
    ).it('on value %s returns index %s from Stack(1, 2, 3, 4, 2, 3)', (searchValue: number, expectedIndex: number) => {
      const stack = new Stack(1, 2, 3, 4, 2, 3);

      const index = stack.search(searchValue);

      expect(index).toEqual(expectedIndex);
    });
  });

  it('copy', () => {
    const original = new Stack(1, 2, 3);
    const copy = original.copy();

    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
  });


  describe('first', () => {
    // @ts-ignore
    each(
      [
        [new Stack(1, 2, 3), 1],
        [new Stack(), undefined]
      ]
    ).it('on %p returns %s', (stack: Stack<number>, expectedValue: number) => {
      const elem = stack.first;

      expect(elem).toEqual(expectedValue);
    });
  });


  describe('last', () => {
    // @ts-ignore
    each(
      [
        [new Stack(1, 2, 3), 3],
        [new Stack(), undefined]
      ]
    ).it('on %p returns %s', (stack: Stack<number>, expectedValue: number) => {
      const elem = stack.last;

      expect(elem).toEqual(expectedValue);
    });
  });


  describe('bottom', () => {
    // @ts-ignore
    each(
      [
        [new Stack(1, 2, 3), 1],
        [new Stack(), undefined]
      ]
    ).it('on %p returns %s', (stack: Stack<number>, expectedValue: number) => {
      const elem = stack.bottom;

      expect(elem).toEqual(expectedValue);
    });
  });


  describe('top', () => {
    // @ts-ignore
    each(
      [
        [new Stack(1, 2, 3), 3],
        [new Stack(), undefined]
      ]
    ).it('on %p returns %s', (stack: Stack<number>, expectedValue: number) => {
      const elem = stack.top;

      expect(elem).toEqual(expectedValue);
    });
  });
});