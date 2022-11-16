class Palindrome {
  solve(s: string): boolean {
    const re = /[\W_]/g;
    const lowered = s.replace(re, "").toLowerCase();
    const reversed = lowered.split("").reverse().join('');
    return lowered === reversed;
  }
}

export default Palindrome;