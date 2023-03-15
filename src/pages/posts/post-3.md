---
layout: ../../layouts/MarkdownPostLayout.astro
title: UgraCTF
author: Jan Fok
description: "challenges from UgraCTF"
image: 
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAYFBMVEWKhsr////LyeiNiszHxeWlotb7+/2ysNzq6fWZltG9u+GRjc3c2+/Fw+X29vvk4/OgndTp6PW7uOCpptiWks/S0evx8Pm4td+hntTh4PLNzOmtqtqZldGsqdr39/vW1exTxvnwAAADiklEQVR4nO2WW3eiQBCEUeSugKh4Tfz//3KrmJlDy3E38JLN7qnvpdMwTleG7oIoEkIIIYQQQgghhBBCCCGEEEIIIYT431j9AN7J+vaDmCVBsn6HZC1BspbwpazHer0uEQvEDLFdj2RxFCUbk+P+xdy/I09MfkCembxAfjb5Y76sO7ztyZ8jnhC7dPS8NWSVNsf9nfHEHfKbySm7MTll9WPat/NldaYcy2zMtjzF9ZimyOOpjK3JL8hrs76KoqPJ98V8WSzT+XhGfJptkVenMa8hozL3VwnW700eRy9vthyyCiPrukAWy3z4w0eM8d/XZeLgf/t0+R3la/RShXVpliSH3j8kPmO/nCorBPZDf0gSPrPsc7VqPtztNp4vK0cZ/D5GuRr7PhpuOd4umON6AVk9ZBwhp0brxpRDGZQw2T+0Kzlj3a36s4Q311iGrTiURWwR92NrRm3ueqLFw+ix/QNlasrlQ0JM+HAm+5e+XckO63dxNOUrWUXvyiaIjY/XcZCjBHIabNt6GRcv44C4jdwA3yb7r/20kJNv3YWy7ii7PaIM5DwRM58P1yHnw7fr1q/PTEtzcMMAW0K7gthMCCdmriy25AkP5xxi6uzrvBrtbGVOxNpWGNz7ZH9OhW/P43Vcblv2K1l0y+Ca7IfQFyEGGfahTP2hfd3+uHdTQlrjrvllvqzQBxvvlmsTOy+jz/O8bNthvq8+Zx0O2KdzTUuYEnLhoOcO9shcWafRNT9D9K6ZIsaUcfGnwtg7X6BrpghF6lzTcvDTQ9iidoJmyjpuXSsy9nfXCzXatUL8hIw4965ZOznxyvkDB3PP04CsZiKLU3Py17J0tLAFsoqra8UX12zfu2awqyYa/WEoO7Elvuxv/lr3xj9myKJ79rssKyEjL5yN1V2WdRPXvHg59IcwqCzHydhmjvDG45Rs3J8xW3bqHzNkDa+2FKyca7J8yLf+VK5eThhQljST4taDs5dyc21Kqptr3aWy7vYF72UE2BPdxDU5mJmJ5rMm9W7JaQnOObTu1NZmyLKmffIyAjwN+7nD7TmYdMXG2VZs3dIbe2jXQRY/ACa2NkdWshlh2YPJh+8SxOHTF5FzXiLSfrrNZodYdePy0vdWhbWlt6iqdOuWyorikXf5nPjye3Nv+vcSWX8JyVqCZC3hX5L1A/j2gxBCCCGEEEIIIYQQQgghhBBCCCGEED+JX89VKJ3Y8LiPAAAAAElFTkSuQmCC"
    alt: "UgraCTF logo"

---

## Musical five minutes
#### Category: Steganography

We were provided an audio file. Downloading the file and playing it in a media player, we could see that the flag was on the image track.

### Flag
**ugra_we_support_local_artists_0824da**

---

## Whirlpool
#### Category: Cryptography

A text file encrypted using a ROT13 cypher was provided to us. I used the following bash script to decode the text to obtain the flag:

```bash
cat ciphertext.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m' | awk '/ugra/{print $13}'
```

### Flag
**ugra_double_security_for_only_50_more_bucks_j8ejd7miwsmf**

---

## Cartoons
#### Category: Miscellaneous

We are given a text file which contains many long lines of unicode. When I use `cat` to display the file, a series of characters would flash across the terminal very quickly. 

I used a screen recorder to record the flashing characters and watched the playback. Turns out, the flashing characters form the flag.

### Flag
**ugra_weve_got_terminals_8e3bz50ts45q**

---

## Safestr
#### Category: PWN

We are supposed to use `nc` to connect to a remote host which is running program. We are provided the source code to the program which is written in C.

```C
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>

struct SafeString {
  char *ptr;
  size_t size;
};

void set(struct SafeString s, size_t pos, char c) {
  if (pos >= 0 && pos < s.size) {
    s.ptr[pos] = c;
  }
}

void safeGets(struct SafeString s, size_t size) {
  for (size_t readed = 0; readed < size; readed++) {
    char c = fgetc(stdin);
    if (c == '\n') {
      set(s, readed, '\0');
      return;
    } else {
      set(s, readed, c);
    }
  }
  set(s, size, '\0');
}

void writeKey(struct SafeString s);

int main() {
  char *buf = (char *)malloc(512);
  struct SafeString s = {buf, 256};
  struct SafeString flag = {buf + s.size, 512 - s.size};
  writeKey(flag);

  size_t size = 0;
  printf("Enter input size: ");
  fflush(stdout);
  scanf("%lu", &size);
  fgetc(stdin); // skip newline
  if (size > s.size) {
    puts("Size is too big");
    return 0;
  }

  printf("Enter string: ");
  fflush(stdout);
  safeGets(s, size);

  printf("You entered: %s\n", s.ptr);
}
```

As we can see from the source code, the flag is located right after the buffer for the string. Since strings are terminated with a null byte, if we can fill the string buffer with characters that isn't null, the `printf` function would print the input string along with the flag. 

Therefore, we would input a string with a size of 256 when prompted. This would cause the buffer to fill up. 

The `set` command at the end of the safeGets function where it tries to set the 256th character with a null byte would not execute as the `set` command would not run if the position of the character is more than or equal to the size of the struct.

I used `perl` to produce the input string.

```perl
$ perl -e 'print "A" x256'
```

### Flag
**ugra_safe_0r_no7_5afe_2fgmfjkzlblq**