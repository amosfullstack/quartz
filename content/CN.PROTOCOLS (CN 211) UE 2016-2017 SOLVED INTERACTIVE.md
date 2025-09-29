
#### **COMPUTER NETWORKING PROTOCOLS EXAMINATION**  

2016/2017 ACADEMIC YEAR (FIRST SEMESTER)

**THE UNIVERSITY OF DODOMA**  
**COLLEGE OF INFORMATICS AND VIRTUAL EDUCATION**  
**SCHOOL OF INFORMATICS**  
**UNDERGRADUATE UNIVERSITY EXAMINATIONS**  
**FIRST SEMESTER 2016/2017**  
**IN 211: COMPUTER NETWORKING PROTOCOLS**  
**Date: 20 February, 2017**  
**Time Allocated: 3 Hours**

**Instructions:**

1. _This question paper consists two Sections_
    
2. _Attempt ALL questions from Section A and Any THREE Questions from Section B_
    
3. _All University of Dodoma examination regulations apply._
    

---

## **SECTION A (40 Marks)**

### **Question One**

**a) What is a protocol in internet world and briefly explain the key elements of a protocol.** _(3 Marks)_

> [!Tip]- Answer (Click to show)  
> **A protocol is a set of rules governing data communication. Key elements: Syntax, Semantics, Timing**



**b) Briefly describe the three types of UTP cable configuration and where they are used in a network.** _(6 Marks)_

> [!Tip]- Answer (Click to show)
> 
> 1. **Straight-through:** Switch to host
>     
> 2. **Crossover:** Similar devices
>     
> 3. **Rollover:** Console connection
>     



**c) Briefly explain how to distinguish a unicast physical address from a multicast physical address in a computer network. Then, identify the type of the following destination physical addresses (i) 4A:30:10:21:10:1A, (ii) FF:FF:FF:FF:FF and (iii) 47:20:1B:2E:08:EE.** _(4 Marks)_

> [!Tip]- Answer (Click to show)  
> **Unicast: Least significant bit of first byte is 0**  
> **Multicast: Least significant bit of first byte is 1**  
> (i) Unicast, (ii) Broadcast, (iii) Unicast



**d) Physical addresses in a network are transmitted in binary notation. Given the physical address in (c) part (iii) above, show how this address is transmitted in a network. _Hint, just show the first two octets_.** _(4 Marks)_

> [!Tip]- Answer (Click to show)  
> **01000111 00100000**



**e) Briefly discuss classful IPv4 addressing with their block ranges.** _(5 Marks)_

> [!Tip]- Answer (Click to show)  
> **Class A: 1-126, Class B: 128-191, Class C: 192-223, Class D: 224-239, Class E: 240-255**



**f) A classful address in a block is given as 73.21.50.25. Find the number of addresses in the block, the first address, and the last address.** _(4 Marks)_

> [!Tip]- Answer (Click to show)  
> **Number: 16,777,216**  
> **First: 73.0.0.0**  
> **Last: 73.255.255.255**



**g) Briefly discuss the three major differences between a router and a bridge.** _(2 Marks)_

> [!Tip]- Answer (Click to show)
> 
> 1. **Router works at network layer, bridge at data link layer**
>     
> 2. **Router uses IP addresses, bridge uses MAC addresses**
>     
> 3. **Router connects different networks, bridge connects segments**
>     



**h) TCP and UDP are protocols used in transport layer of TCP/IP protocol suit. Give at least two points to differentiate the two protocols?** _(2 Marks)_

> [!Tip]- Answer (Click to show)
> 
> 1. **TCP is connection-oriented, UDP is connectionless**
>     
> 2. **TCP provides reliability, UDP does not**
>     

---

### **Question Two**

**Assume that, Dar Es Salaam City Council is planning to install free internet cafes all over the city for public use. The City is having Hala, Kinondoni, Temeke and Kiganboni districts only. Suppose, the City is given a classful IP address block from 141.14.0:0 to 141.14.255.255 and you are asked to advise the City Council on how to share this resource equally between the four districts (Ilala, Kinondoni, Temeke and Kigamboni). Then,**

**a) How many host addresses will you allocate to each district?** _(2 Marks)_

> [!Tip]- Answer (Click to show)  
> **16,384 addresses per district**



**b) List the first and last host addresses of each district.** _(8 Marks)_

> [!Tip]- Answer (Click to show)  
> **Ilala: 141.14.0.1 - 141.14.63.254**  
> **Kinondoni: 141.14.64.1 - 141.14.127.254**  
> **Temeke: 141.14.128.1 - 141.14.191.254**  
> **Kigamboni: 141.14.192.1 - 141.14.255.254**

---

## **SECTION B (60 Marks)**

#### **Question Three**

**a) Briefly discuss what a collision domain is and how to control it when a LAN performance is degraded.** _(5 Marks)_

> [!Tip]- Answer (Click to show)  
> **Collision domain: Network segment where collisions can occur**  
> **Control: Use switches to create separate collision domains**



**b) Briefly explain the CDMA/CD and CDMA/CA protocols and their differences in their applications.** _(5 Marks)_

> [!Tip]- Answer (Click to show)  
> **CSMA/CD: Used in wired Ethernet, detects collisions**  
> **CSMA/CA: Used in wireless, avoids collisions**



**c) Briefly describe algorithm flow charts of CDMA/CD and that of CDMA/CA protocols to show the work to support data communication in layer one devices.** _(10 Marks)_

> [!Tip]- Answer (Click to show)  
> **CSMA/CD: Listen→If busy→Wait/If free→Transmit→If collision→Backoff→Retry**  
> **CSMA/CA: Listen→If busy→Wait/If free→Send RTS→Wait CTS→Transmit**

---

### **Question Four**

**a) Briefly describe the four addressing Systems as they are used in TCP/IP Protocol Suite.** _(10 Marks)_

> [!Tip]- Answer (Click to show)
> 
> 1. **Physical addressing:** MAC addresses
>     
> 2. **Logical addressing:** IP addresses
>     
> 3. **Port addressing:** Port numbers
>     
> 4. **Specific addressing:** Application-specific
>     



**b) Describe and compare a TCP and UDP packets.** _(10 Marks)_

> [!Tip]- Answer (Click to show)  
> **TCP: Connection-oriented, reliable, sequencing, flow control**  
> **UDP: Connectionless, unreliable, faster, less overhead**

---

### **Question Five**

**With their steps, briefly describe the Simplified router forwarding Modules,**  
**a) With subnetting** _(10 Marks)_

> [!Tip]- Answer (Click to show)  
> **Extract destination IP→Apply subnet mask→Find matching subnet→Forward to next hop**



**b) Without subnetting** _(10 Marks)_

> [!Tip]- Answer (Click to show)  
> **Extract network ID→Find in routing table→Forward to interface**

---

### **Question Six**

**a) Briefly describe the IEEE 802.3 Ethernet Frame format.** _(10 Marks)_

> [!Tip]- Answer (Click to show)  
> **Preamble→SFD→Destination MAC→Source MAC→Length/Type→Data→Padding→FCS**



**b) An Ethernet MAC sublayer receives 42 bytes of data from the LLC sublayer. Explain how the data can be encapsulated in Ethernet Frame format for transmission.** _(4 Marks)_

> [!Tip]- Answer (Click to show)  
> **Add 18 bytes header/FCS → Total 60 bytes → Pad to 64 bytes minimum**



**c) An Ethernet MAC sublayer receives 1510 bytes of data from the LLC layer. Briefly explain how many frames need to be sent? What is the size of the data in each frame?** _(6 Marks)_

> [!Tip]- Answer (Click to show)  
> **2 frames needed**  
> **First frame: 1500 bytes data**  
> **Second frame: 10 bytes data + padding**


---

**END OF EXAMINATION PAPER**