export class Hex {
  private value: string;

  static prefix = '0x';

  constructor(value: string) {
    if (!value) {
      throw new Error('Hex string is empty');
    }

    if (!Hex.isValid(value)) {
      throw new Error('Invalid hex value');
    }

    this.value = Hex.removePrefix(value);
  }

  static isHasPrefix(value: string) {
    const prefixOfValue = value.slice(0, this.prefix.length);

    return prefixOfValue === this.prefix;
  }

  static removePrefix(value: string) {
    return Hex.isHasPrefix(value) ? value.slice(Hex.prefix.length, value.length) : value;
  }

  static addPrefix(value: string) {
    return Hex.isHasPrefix(value) ? value : Hex.prefix + value;
  }

  get withPrefix() {
    return Hex.addPrefix(this.value);
  }

  get withoutPrefix() {
    return this.value;
  }

  static stringToHex(value: string): Hex {
    let hex = '';

    for (let i = 0; i < value.length; i++) {
      const charCode = value.charCodeAt(i);
      const hexValue = charCode.toString(16);

      // Pad with zeros to ensure two-digit representation
      hex += hexValue.padStart(2, '0');
    }

    return new Hex(hex);
  }

  static isValid(value: string): boolean {
    const hex = this.addPrefix(value);

    return Boolean(hex.match(/^0x[0-9a-f]+$/i));
  }
}
