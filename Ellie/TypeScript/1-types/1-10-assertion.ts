{
  /**
   * Type Assertions ๐ฉ ํ์์ ๊ฐ์ํ  ๋ > ์ข์ง ์์
   */

  function jsStrFunc(): any {
    return "hello";
  }

  const result = jsStrFunc();
  // ํ์ฌ result๋ anyํ์์ด๋ผ ๋ฌธ์์ด ๊ธธ์ด๋ฅผ ๊ณ์ฐํ  ์ ์๋ค.
  // result.length;
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  // TypeError: wrong.push is not a function
  console.log((wrong as Array<number>).push(1)); // ๐ญ

  // 100% ์ฅ๋ดํ  ๋ ์จ์ผํ๋ค.

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  // ์ซ์ ๋ฐฐ์ด์ผ ์๋ ์์ง๋ง undefined์ผ ์๋ ์๊ธฐ ๋๋ฌธ์ ๊ฒฝ๊ณ ๋ธ
  // !๋ฅผ ์์ฑํด์ 100%ํ์ ํ  ๋ ์ด๋ค. ๋ฌด์กฐ๊ฑด null, undefined๊ฐ  ์๋๋ผ๋ ๋ป
  numbers!.push(2); // ๐ญ

  const button = document.querySelector("class");
  // button.nodeValue // null์ผ ์๋ ์์.
  if (button) {
    button.nodeValue;
  }

  // 100% ์์ ๋ ์ฅ๋ดํ  ์ ์์ ๋
  const button2 = document.querySelector("class")!;
}
