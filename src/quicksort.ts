/**
 * 快速排序 (Quick Sort) 实现
 *
 * 平均时间复杂度: O(n log n)
 * 最坏时间复杂度: O(n^2)（已通过三数取中法缓解）
 * 空间复杂度: O(log n)（递归栈）
 */

/** 默认比较器：升序 */
function defaultCompare<T>(a: T, b: T): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

/** 交换数组中两个元素 */
function swap<T>(arr: T[], i: number, j: number): void {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

/** 三数取中法选择基准，减少最坏情况概率 */
function medianOfThree<T>(
  arr: T[],
  lo: number,
  hi: number,
  compare: (a: T, b: T) => number
): number {
  const mid = lo + Math.floor((hi - lo) / 2);
  if (compare(arr[mid], arr[lo]) < 0) swap(arr, lo, mid);
  if (compare(arr[hi], arr[mid]) < 0) swap(arr, mid, hi);
  else if (compare(arr[hi], arr[lo]) < 0) swap(arr, lo, hi);
  // 此时 arr[lo] <= arr[mid] <= arr[hi]，把基准放到 hi-1 位置
  swap(arr, mid, hi - 1);
  return hi - 1;
}

/** Lomuto/Hoare 混合：对小区间用插入排序优化 */
function insertionSortRange<T>(
  arr: T[],
  lo: number,
  hi: number,
  compare: (a: T, b: T) => number
): void {
  for (let i = lo + 1; i <= hi; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= lo && compare(arr[j], key) > 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

/** 递归快排主体（原地排序） */
function quickSortRange<T>(
  arr: T[],
  lo: number,
  hi: number,
  compare: (a: T, b: T) => number
): void {
  // 小区间退化为插入排序
  const INSERTION_THRESHOLD = 16;
  while (lo < hi) {
    if (hi - lo + 1 < INSERTION_THRESHOLD) {
      insertionSortRange(arr, lo, hi, compare);
      return;
    }

    // 三数取中选基准
    const pivotIndex =
      hi - lo >= 2 ? medianOfThree(arr, lo, hi, compare) : lo;
    const pivot = arr[pivotIndex];

    // 双指针分区（Hoare 风格）
    let i = lo;
    let j = hi;
    while (i <= j) {
      while (compare(arr[i], pivot) < 0) i++;
      while (compare(arr[j], pivot) > 0) j--;
      if (i <= j) {
        swap(arr, i, j);
        i++;
        j--;
      }
    }

    // 递归较小的分区，较大的分区用循环处理（尾递归优化，控制栈深度 O(log n)）
    if (j - lo < hi - i) {
      if (lo < j) quickSortRange(arr, lo, j, compare);
      lo = i;
    } else {
      if (i < hi) quickSortRange(arr, i, hi, compare);
      hi = j;
    }
  }
}

/**
 * 原地快速排序：直接修改传入数组并返回它。
 * @param arr 待排序数组
 * @param compare 可选比较器，默认升序
 */
export function quickSortInPlace<T>(
  arr: T[],
  compare: (a: T, b: T) => number = defaultCompare
): T[] {
  if (arr.length > 1) {
    quickSortRange(arr, 0, arr.length - 1, compare);
  }
  return arr;
}

/**
 * 非原地快速排序：返回新的已排序数组，不修改原数组。
 * @param arr 待排序数组
 * @param compare 可选比较器，默认升序
 */
export function quickSort<T>(
  arr: readonly T[],
  compare: (a: T, b: T) => number = defaultCompare
): T[] {
  const copy = arr.slice();
  return quickSortInPlace(copy, compare);
}
