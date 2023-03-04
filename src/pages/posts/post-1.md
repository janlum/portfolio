---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'picoCTF'
description: 'Some challenges from the picoGym'
author: 'Jan Fok'
image:
    url: 'data:image/png;base64,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' 
    alt: 'picoCTF logo'
---


## Get aHead
#### Category: Web Exploitation

From the title of the challenge, I get a hint to check the headers of the website.

I used the following command to obtain the header which returned the flag:

```bash
$ curl -I <url>
```

### Flag
**picoCTF{r3j3ct_th3_du4l1ty_2e5ba39f}**

---

## Cookies
#### Category: Web Exploitation

When I open the webpage on my browser, I see a search box with the words "snickerdoodle" in transparent. Using Burp Suite to intercept the response request after entering the phrase, I see that the set-cookie has a value of 0. Manually changing the set-cookie to other integer values returns a different response. Using the following python script, I brute-forced the cookie values and obtained the flag at "name=18".

```python
#!/bin/python

import requests
url = 'http://mercury.picoctf.net:6418/'


for i in range(20):
    text = str(i)
    cookie = {
        'name': text
    }

    response = requests.get(url, cookies=cookie)
    result = response.text.split(
            '<p style=\"text-align:center; font-size:30px;\"><b>')[1].split('</b>')[0]
    if not ('I love' in result):
        print(response.text.split('<code>')[1].split('</code>')[0])
```

### Flag
**8picoCTF{3v3ry1_l0v3s_c00k135_88acab36}**

---

## Scavenger Hunt
#### Category: Web Exploitation

Looking at the source code, I find the first part of the flag: `picoCTF{t`.

The second part of the flag can be found in the css code: `h4ts_4_l0`.

In the javascript file, there is a comment which asks us "How can I keep Google from indexing my website?". After a quick google search, I found that a file labelled `robots.txt` is added in the root directory of websites with instructions for web crawlers. 

Appending the filename to the url, I find the next part of the flag: `t_0f_pl4`.

I then get a clue to look in the apache access file, which a quick google search tells us that it's called the `.ht_access` file. Appending that to the url gives us the 4th part of the flag: `3s_2_lO0k`.

The next clue tells us to look for a file which stores information on a mac. Google then informs us that it's called a `.DS_Store` file. Looking in that file, I get the final part of the flag: `_a69684fd}`.

### Flag
**picoCTF{th4ts_4_l0t_0f_pl4c3s_2_lO0k_a69684fd}**

---

## logon
#### Category: Web Exploitation

The task's description asks us to log in as Joe.

The website allows anonymous log in with no password, but I won't get a flag.

Using Burp to intercept the response packet, I can see that there is a cookie labelled 'admin'. Changing the value to 'True' brings us to the page with the flag. 

### Flag
**picoCTF{th3_c0nsp1r4cy_l1v3s_0c98aacc}**

---

## dont-use-client-side
#### Category: Web Exploitation

Looking at the source code, I se a javascript file which contains a function which splits the flag into 8 pieces. Piecing them together gives us the flag.

### Flag
**picoCTF{no_clients_plz_b706c5}**

---

## It is my Birthday
#### Category: Web Exploitation, Encryption

I are provided a URL to a webpage which contains two forms requesting for two PDFs. 

First, I tested if code injection worked, but I got no response from injecting bash code.

Eventually, I found a StackOverflow post online which talked about md5 hashing collisions.

Searching on google, I found two collision values for md5. Copying the values into two separate PDF files and uploading to the website, I managed to obtain the flag.

### Flag
**picoCTF{c0ngr4ts_u_r_1nv1t3d_40d81ca2}**
