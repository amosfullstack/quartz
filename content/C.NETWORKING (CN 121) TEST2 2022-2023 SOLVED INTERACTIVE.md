
# **UNIVERSITY OF DODOMA**  
**College of Informatics and Virtual Education**  
**CN 121 – INTRODUCTION TO NETWORKING**  
**TEST 2: Monday 5th June, 2023**  
**Time:** 08:00 – 09:00  

**This test consists of TWO questions**  
**Answer all questions**

---

### **Question One**

**(a)** Given an IP address and subnet mask as **10.1.0.0/22**, use this address to determine the subnet mask in decimal notation, the network ID of first subnetwork, the first host address in this subnetwork, the last host address in this subnetwork, the broadcast address in this subnetwork and the number of hosts.

<span style="color:rgb(0, 176, 80)">ANSWER</span> :

| SN | Question | Write Your Answers in corresponding spaces below |
|---|---|---|
| 1 | Subnet Mask | 255.255.252.0 |
| 2 | Network ID | 10.1.0.0 |
| 3 | First Host | 10.1.0.1 |
| 4 | Last Host | 10.1.3.254 |
| 5 | Broadcast IP | 10.1.3.255 |
| 6 | Number of Hosts | 1022 |

> [!Tip]- Answer Explanation (Click to show)
> - **Subnet Mask:** /22 = 255.255.252.0
> - **Network ID:** 10.1.0.0
> - **First Host:** 10.1.0.1
> - **Last Host:** 10.1.3.254
> - **Broadcast IP:** 10.1.3.255
> - **Number of Hosts:** 2¹⁰ - 2 = 1022



**(b)** Provide the maximum number of valid subnets and usable hosts per subnet that you can get from the network **192.168.155.0/29**.

| SN | Question | Write Your Answers in corresponding spaces below |
|---|---|---|
| 1 | Subnets | 32 |
| 2 | Hosts per Subnet | 6 |

> [!Tip]- Answer Explanation (Click to show)
> - **Subnets:** 2⁵ = 32
> - **Hosts per Subnet:** 2³ - 2 = 6



**(c)** What subnet mask would you use for the 172.21.0.0 network, such that you can get 320 subnets and 120 hosts per subnet? What is the maximum number of hosts per such subnet?

| SN | Question | Write Your Answers in corresponding spaces below |
|---|---|---|
| 1 | Subnet Mask | 255.255.255.128 |
| 2 | Maximum hosts | 126 |

> [!Tip]- Answer Explanation (Click to show)
> - **Subnet Mask:** 255.255.255.128 (/25)
> - **Maximum hosts:** 2⁷ - 2 = 126



### **Question Two**  
*Write down windows IP commands that will do the following:*

| SN | Description | Windows IP Command |
|---|---|---|
| 1 | Deletes the local DNS resolver cache of the computer | `ipconfig /flushdns` |
| 2 | Find the IP address of www.udom.ac.tz | `nslookup www.udom.ac.tz` |
| 3 | By default send 4 ICMP packets to 192.168.1.1 | `ping 192.168.1.1` |
| 4 | Shows information of the path that a TCP/IP packet takes towards a destination target | `tracert` |
| 5 | Show the established network TCP/IP connections of the local computer with remote hosts, open ports on the machine, the process ID (PID) of each connection etc | `netstat -ano` |
| 6 | Displays the current routing table of the computer | `route print` |
| 7 | Displays all cache mappings (IP address to MAC address) | `arp -a` |
| 8 | Delete the arp entry for 10.10.0.2 address | `arp -d 10.10.0.2` |
| 9 | Release the current IPv4 addresses which were assigned dynamically from a DHCP server | `ipconfig /release` |
| 10 | Refreshes all DHCP addresses and also communicates again with the external DNS server to make sure its reachable etc. | `ipconfig /renew` |

---

### **Short Answer Questions**

**1.** The three security goals are ______, ______ and ______.  

> [!Tip]- Answer (Click to show)
> **Confidentiality, Integrity, Availability**

**2.** The size of IP address in IPv6 is ______ bits.  

> [!Tip]- Answer (Click to show)
> **128**

**3.** With Ethernet there is either straight through or crossover connections; between the two which connection type is used when directly connecting computer to computer?  

> [!Tip]- Answer (Click to show)
> **Crossover**

**4.** Given 11111001 10011011 11111011 00001111; its dotted-decimal notation will be ______.  

> [!Tip]- Answer (Click to show)
> **249.155.251.15**

**5.** With Ethernet there is either straight through or crossover connections; what connection between the two is used when connecting two switches using their normal ports?  

> [!Tip]- Answer (Click to show)
> **Crossover**

**6.** What is the subnetwork address if the destination address is 200.45.34.56 and the subnet mask is 255.255.240.0?  

> [!Tip]- Answer (Click to show)
> **200.45.32.0**

**7.** The length of Physical address also known as MAC Address is ______ bits.  

> [!Tip]- Answer (Click to show)
> **48**

**8.** When it comes to Port Address, HTTP use port number ______.  

> [!Tip]- Answer (Click to show)
> **80**

**9.** This IP address 11110011 10011011 11001100 00000001 belongs to class ______. 

> [!Tip]- Answer (Click to show)
> **E**

**10.** You need to subnet a network that has 5 subnets, each with at least 16 hosts. Which subnet mask would you use?  

> [!Tip]- Answer (Click to show)
> **255.255.255.224**

---

**END OF TEST**