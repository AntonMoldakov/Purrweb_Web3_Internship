/**
 * Обратите внимание, что localStorage уязвим к XSS-атакам,
 * поэтому строго не рекомендуется хранить приватные ключи от кошельков
 * напрямую в localStorage.
 * При выполненнии задания, можете не беспокоиться о безопасности, но на реальных проектах
 * любые приватные данные перед записью в localStorage, стоит прогонять через хеш-функцию,
 * либо использовать уже готовую реализацию: https://www.npmjs.com/package/react-secure-storage
 */

class Storage {
  setItem<T>(key: StorageKeys, value: T): void {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: StorageKeys): T | null {
    const value = localStorage.getItem(key);

    if (!value) {
      return null;
    }

    return JSON.parse(value);
  }

  removeItem(key: StorageKeys): void {
    return localStorage.removeItem(key);
  }
}

export enum StorageKeys {
  WalletsTestnet = 'web3.internship.wallets-testnet',
  WalletsMainnet = 'web3.internship.wallets-mainnet',
}

export const storage = new Storage();
