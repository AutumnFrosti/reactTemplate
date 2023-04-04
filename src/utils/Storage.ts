export default class StorageHelper {
  private storage: Storage

  constructor(storageType: 'localStorage' | 'sessionStorage') {
    this.storage = window[storageType]
  }

  // 获取数据
  public get(key: string): any {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
    return null
  }

  // 保存数据
  public set(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value))
  }

  // 删除数据
  public remove(key: string): void {
    this.storage.removeItem(key)
  }

  // 清空数据
  public clear(): void {
    this.storage.clear()
  }
}

// // 例子：使用 localStorage
// const localStorageHelper = new StorageHelper('localStorage');
// localStorageHelper.set('name', '张三');
// console.log(localStorageHelper.get('name')); // 输出：张三
// localStorageHelper.remove('name');
// localStorageHelper.clear();
