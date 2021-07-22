export class Debouncer {
  private timeout: NodeJS.Timeout | null = null;

  public debounce(func: () => void, timeout = 300) {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }

    this.timeout = setTimeout(() => {
      func();
      this.timeout = null;
    }, timeout);
  }
}
