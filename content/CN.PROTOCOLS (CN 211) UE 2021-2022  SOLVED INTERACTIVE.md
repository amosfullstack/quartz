#### Computer Networking Protocols - Exam

**COMPUTER NETWORKING PROTOCOLS EXAMINATION**  
**CN 211 - UNIVERSITY OF DODOMA**  
**End of Semester One - 2021/2022 Academic Year**

---

## ** SECTION A: (15 MARKS)**

### **Question 1 - Multiple Choice**  
*(0.5 Marks Each)*

**I. A Network Address Translation (NAT gateway) changes the following fields of a packet going from the internal (local area) network to the external (wide area) network: -**
- [ ] A. Source IP address  
- [ ] B. Source IP address and source port number  
- [ ] C. Destination IP address  
- [ ] D. Destination IP address and destination port number  
- [ ] E. Source and destination port numbers  

> [!Tip]- Answer (Click to show)
> **B. Source IP address and source port number**
> - NAT translates private internal IP addresses to public external IP addresses
> - PAT (Port Address Translation) also modifies source port numbers to track connections



**II. Which of the following functionalities must be implemented by a transport protocol over and above the network protocol?**
- [ ] A. End to end connectivity  
- [ ] B. Packet delivery in the correct order  
- [ ] C. Detection of duplicate packets  
- [ ] D. Recovery from packet losses  
- [ ] E. Routing of packets  

> [!Tip]- Answer (Click to show)
> **B. Packet delivery in the correct order**
> - Network layer (IP) provides best-effort delivery without ordering guarantees
> - Transport layer (TCP) ensures packets are delivered in correct sequence



**III. On classic Ethernet, the Maximum Transmission Unit (MTU) for an IP datagram is**
- [ ] A. 64 bytes  
- [ ] B. 1024 bytes  
- [ ] C. 1500 bytes  
- [ ] D. 65536 bytes  
- [ ] E. 4096 bytes  

> [!Tip]- Answer (Click to show)
> **C. 1500 bytes**
> - Standard Ethernet MTU is 1500 bytes for IP datagrams
> - This excludes Ethernet header (14 bytes) and FCS (4 bytes)



**IV. Which of the following is TRUE about IPv4 class A, B and C?**
- [ ] A. Large number of networks and small number of hosts, medium number of networks and hosts, and small number of networks and large number of hosts respectively.
- [ ] B. Medium number of networks and hosts, small number of networks and large number of hosts, and large number of networks and small number of hosts respectively.
- [ ] C. Small number of networks and large number of hosts, large number of networks and small number of hosts, and medium number of networks and hosts respectively.
- [ ] D. Small number of networks and large number of hosts, medium number of networks and hosts, and large number of networks and small number of hosts respectively.
- [ ] E. All have the same number of networks

> [!Tip]- Answer (Click to show)
> **D. Small number of networks and large number of hosts, medium number of networks and hosts, and large number of networks and small number of hosts respectively.**
> - Class A: Few networks (126), many hosts (16M)
> - Class B: Medium networks (16K), medium hosts (65K)  
> - Class C: Many networks (2M), few hosts (254)



**V. An example of protocols that doesn't support CIDR and VLSM are:**
- [ ] A. RIPv2 and EIGRP
- [ ] B. IS-IS and OSPF
- [ ] C. RIPv1 and IGRP
- [ ] D. RIPv2 and OSPF
- [ ] E. RIPv2 and EIGRP

> [!Tip]- Answer (Click to show)
> **C. RIPv1 and IGRP**
> - RIPv1 and IGRP are classful routing protocols
> - They don't support CIDR (Classless Inter-Domain Routing) or VLSM (Variable Length Subnet Masking)



**VI. Identify the correct sequence in which the following packets are transmitted on the network by a host when a browser requests a webpage from a remote server, assuming that the host has just been restarted.**
- [ ] A. HTTP GET request, DNS query, TCP SYN
- [ ] B. DNS query, TCP SYN, HTTP GET request
- [ ] C. DNS query, HTTP GET request, TCP SYN
- [ ] D. TCP SYN, DNS query, HTTP GET request
- [ ] E. HTTP GET request, TCP SYN, DNS query

> [!Tip]- Answer (Click to show)
> **B. DNS query, TCP SYN, HTTP GET request**
> 1. DNS query to resolve domain name to IP address
> 2. TCP SYN to establish connection with web server
> 3. HTTP GET request to retrieve webpage



**VII. Which of the following is are example(s) of stateful application layer protocols? (i) HTTP (ii) FTP (iii) TCP (iv) POP3**
- [ ] A. (i) and (ii) only  
- [ ] B. (ii) and (iii) only  
- [ ] C. (ii) and (iv) only  
- [ ] D. (iv) only  
- [ ] E. (i) only  

> [!Tip]- Answer (Click to show)
> **C. (ii) and (iv) only**
> - FTP and POP3 are stateful application protocols (maintain session state)
> - HTTP is stateless (each request independent)
> - TCP is transport layer, not application layer



**VIII. Which protocol can be used to load or retrieve Cisco IOS images to or from a router?**
- [ ] A. SNMP  
- [ ] B. TFTP  
- [ ] C. UDP  
- [ ] D. TCP  
- [ ] E. NTP  

> [!Tip]- Answer (Click to show)
> **B. TFTP**
> - TFTP (Trivial File Transfer Protocol) is used for transferring IOS images
> - Simple, connectionless protocol suitable for network device management



**IX. Which of the following protocols is used by email server to maintain a central repository that can be accessed from any machine?**
- [ ] A. POP3  
- [ ] B. IMAP  
- [ ] C. SMTP  
- [ ] D. DMSP  
- [ ] E. SMTP, IMAP, POP  

> [!Tip]- Answer (Click to show)
> **B. IMAP**
> - IMAP (Internet Message Access Protocol) maintains messages on server
> - Allows access from multiple devices while keeping messages centralized



**X. What is the purpose of TCP/UDP port numbers?**
- [ ] A. To indicate the beginning of a three-way handshake  
- [ ] B. To track the different conversations crossing the network at the same time  
- [ ] C. To reassemble the segments into the correct order
- [ ] D. To identify the numbers of the data packets that can be sent without acknowledgment  
- [ ] E. To establish a logical connection between sender and receiver.

> [!Tip]- Answer (Click to show)
> **B. To track the different conversations crossing the network at the same time**
> - Port numbers identify specific applications/services on a host
> - Enable multiplexing/demultiplexing of multiple concurrent connections



---
### **Question 2 - Matching Exercise**

**Match the item in Column A with its corresponding item in Column B.**

| Column A                                            | Column B                                                                              |
| --------------------------------------------------- | ------------------------------------------------------------------------------------- |
| i. 255.255.252.0                                    | A. IP address of router interface                                                     |
| ii. Video conferencing applications                 | B. DNS                                                                                |
| iii. PDU: segment→packet→frame data encapsulation   | C. Subnet mask of WAN link                                                            |
| iv. Email Transfer                                  | D. TCP                                                                                |
| v. ::ac1d:6405                                      | E. Process, host-to-host, internet, network access layer                              |
| vi. Distributed Database                            | F. UDP                                                                                |
| vii. The status codes of 400 series (403, 404, etc) | G. Subnet masks of an organization that uses class B IPv4 address with 64 departments |
| viii. Default Gateway                               | H. Server Error                                                                       |
| ix. DNS record                                      | I. DF and is the last fragment (No more fragments)                                    |
| x. IPV4 flags values 010                            | J. DF and MF                                                                          |
|                                                     | K. IPv6 compatible with IPv4                                                          |
|                                                     | L. Client Error                                                                       |
|                                                     | M. MX                                                                                 |
|                                                     | N. DHCP                                                                               |
|                                                     | O. 172.29.100.5                                                                       |


> [!Tip]- Answer (Click to show)
> **Correct Matches:**
> 
> | Column A | Column B |
> |----------|----------|
> | **i. 255.255.252.0** | **G. Subnet masks of an organization that uses class B IPv4 address with 64 departments** |
> | **ii. Video conferencing applications** | **F. UDP** |
> | **iii. PDU: segment→packet→frame data encapsulation** | **E. Process, host-to-host, internet, network access layer** |
> | **iv. Email Transfer** | **M. MX** |
> | **v. ::ac1d:6405** | **K. IPv6 compatible with IPv4** |
> | **vi. Distributed Database** | **B. DNS** |
> | **vii. The status codes of 400 series (403, 404, etc)** | **L. Client Error** |
> | **viii. Default Gateway** | **A. IP address of router interface** |
> | **ix. DNS record** | **B. DNS** |
> | **x. IPV4 flags values 010** | **I. DF and is the last fragment (No more fragments)** |


---
### **Question 3 - Short Answer**

**i. Difference between congestion control and flow control?**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **Congestion Control vs Flow Control:**
> - **Flow Control**: Prevents sender from overwhelming receiver (receiver-centric)
> - **Congestion Control**: Prevents sender from overwhelming network (network-centric)
> - Flow control uses receiver window size
> - Congestion control uses congestion window size and network feedback


**ii. With example from each IPv4 class, briefly explain what Private IP address is.**  
*(1.5 Marks)*

> [!Tip]- Answer (Click to show)
> **Private IP Addresses (RFC 1918):**
> - **Class A**: 10.0.0.0 to 10.255.255.255 (10.0.0.0/8)
> - **Class B**: 172.16.0.0 to 172.31.255.255 (172.16.0.0/12) 
> - **Class C**: 192.168.0.0 to 192.168.255.255 (192.168.0.0/16)
> - **Purpose**: Not routable on public internet, used for internal networks
> - **Requirement**: NAT for internet connectivity



**iii. Differentiate IPv4, MAC, and port addressing.**  
*(1.5 Marks)*

> [!Tip]- Answer (Click to show)
> | Addressing Type | Layer | Scope | Purpose | Example |
> |----------------|-------|-------|---------|---------|
> | **IPv4 Address** | Network (L3) | Global | Logical network identification | 192.168.1.1 |
> | **MAC Address** | Data Link (L2) | Local | Physical device identification | 00:1A:2B:3C:4D:5E |
> | **Port Address** | Transport (L4) | Host | Application/service identification | Port 80 (HTTP) |



**iv. Differentiate between OSI and TCP/IP model.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **OSI vs TCP/IP Models:**
> - **OSI**: 7 layers (Theoretical, protocol-independent)
> - **TCP/IP**: 4 layers (Practical, built around TCP/IP protocols)
> - **OSI Layers**: Physical, Data Link, Network, Transport, Session, Presentation, Application
> - **TCP/IP Layers**: Network Access, Internet, Transport, Application

---

## **SECTION B: (45 MARKS)**  
*Attempt THREE (3) out of FOUR (4) questions provided.*

### **Question 4 - TCP Protocol**

**a) A client sends a TCP segment to the server with Sequence Number 1400 and the payload included in the segment is 1399 bytes long.**

**i. What is the ACK Number in the acknowledgement that is returned from the server?**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> **ACK Number = 2799**
> - Sequence Number: 1400
> - Payload length: 1399 bytes
> - Next expected byte = 1400 + 1399 = 2799
> - ACK number acknowledges the next expected byte



**ii. Assume this packet is lost but the following packet is received. What is the ACK Number in the acknowledgement that is returned from the server for this packet?**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> **ACK Number = 1400**
> - TCP uses cumulative acknowledgements
> - If packet with SEQ 1400 is lost, receiver continues to expect byte 1400
> - ACK number will be 1400 until the missing segment is received



**b) A TCP connection is using a window size of 10000 bytes, and the previous acknowledgment number was 22001. It receives a segment with acknowledgment number 24001.**

**i. Draw a diagram to show the situation of the window before and after.**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> **TCP Window Diagram:**
> ```
> BEFORE:
> Window: 22001 to 32000 (10000 bytes)
> Sent and ACKed: Up to 22000
> 
> AFTER receiving ACK 24001:
> Window: 24001 to 34000 (10000 bytes)
> Sent and ACKed: Up to 24000
> 
> Window slides forward by 2000 bytes
> ```



**ii. What will be the acknowledgement from the receiver if the second segment is received correctly?**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> **ACK Number = 24001** (same as previous)
> - TCP uses cumulative acknowledgements
> - ACK 24001 means all bytes up to 24000 have been received
> - Receiving additional segments doesn't change ACK number if no new data is acknowledged



**c) Consider a TCP connection between Host A and Host B. Suppose that the TCP segments traveling from Host A to Host B have source port number x and destination port number y. What are the source and destination port numbers for the segments traveling from Host B to Host A?**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> **From Host B to Host A:**
> - **Source Port**: y
> - **Destination Port**: x
> - TCP connections are bidirectional with port numbers reversed for return traffic

---

**d) Describe the functioning of a Distributed Denial-of-Service attack via SYN flood.**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **SYN Flood DDoS Attack:**
> 1. **Attack Method**: Attacker sends massive TCP SYN packets with spoofed source IPs
> 2. **Server Response**: Server allocates resources for half-open connections
> 3. **Resource Exhaustion**: Server's connection table fills up, consuming memory/CPU
> 4. **Legitimate Impact**: Genuine clients cannot establish TCP connections
> 5. **Defense**: SYN cookies, rate limiting, firewalls with connection tracking

---

### **Question 5 - IP Addressing & Subnetting**

**a. Given the network address of 112.44.0.0 and the network mask of 255.255.0.0. Would the two stations with addresses 112.44.22.19/16 and 112.44.23.2/16 be on the same network?**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **Yes, they are on the same network**
> - Both addresses have /16 mask (255.255.0.0)
> - Network portion: 112.44.0.0 for both
> - Same network ID means same broadcast domain



**b. How many network devices can be supported on a single network using network mask of 255.255.240.0?**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **4094 devices**
> - Mask 255.255.240.0 = /20
> - Host bits: 32 - 20 = 12 bits
> - Total hosts: 2^12 = 4096
> - Usable hosts: 4096 - 2 = 4094



**c. Having a single public address within a company and you need to use private addressing and NAT or PAT. With reasons, state what would be the best to use?**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> **PAT (Port Address Translation) is best**
> - **Reason**: Single public IP address available
> - PAT maps multiple private IPs to single public IP using different port numbers
> - Supports many internal devices with only one public IP
> - More efficient than basic NAT for single-IP scenarios



**d. Suppose you are working as a network expert at Ng'ong'ona ICT company. As a network expert, you are given a task to create forty (40) networks/subnets for several departments and sections. You are required to use class B IP address (172.31.0.0/16) and each subnet should not have less than 1000 hosts, what will be: -**

**i. The subnet mask.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **Subnet Mask: 255.255.252.0 (/22)**
> - Need ≥1000 hosts: 2^n - 2 ≥ 1000 → n = 10 host bits
> - Subnet bits: 16 - 10 = 6 bits for subnetting
> - Mask: /22 = 255.255.252.0



**ii. The number of subnets and hosts per subnet.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> - **Total Subnets**: 2^6 = 64 subnets
> - **Hosts per Subnet**: 2^10 = 1024 total, 1022 usable



**iii. The number of valid hosts per subnet.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **1022 valid hosts per subnet**
> - Total hosts: 1024
> - Usable hosts: 1024 - 2 = 1022 (excluding network and broadcast addresses)



**iv. The subnets and their corresponding broadcast addresses (Note: Write the first six and the last two subnets and broadcast addresses).**  
*(8 Marks)*

> [!Tip]- Answer (Click to show)
> **Subnetting Table (172.31.0.0/16 with /22 mask):**
> 
> | Subnet | Network Address | Broadcast Address | Host Range |
> |--------|-----------------|-------------------|------------|
> | 1 | 172.31.0.0/22 | 172.31.3.255 | 172.31.0.1 - 172.31.3.254 |
> | 2 | 172.31.4.0/22 | 172.31.7.255 | 172.31.4.1 - 172.31.7.254 |
> | 3 | 172.31.8.0/22 | 172.31.11.255 | 172.31.8.1 - 172.31.11.254 |
> | 4 | 172.31.12.0/22 | 172.31.15.255 | 172.31.12.1 - 172.31.15.254 |
> | 5 | 172.31.16.0/22 | 172.31.19.255 | 172.31.16.1 - 172.31.19.254 |
> | 6 | 172.31.20.0/22 | 172.31.23.255 | 172.31.20.1 - 172.31.23.254 |
> | ... | ... | ... | ... |
> | 63 | 172.31.252.0/22 | 172.31.255.255 | 172.31.252.1 - 172.31.255.254 |
> | 64 | (Next would be 172.32.0.0) - Outside original /16 range |

---

### **Question 6 - VLSM Subnetting**

**Given a network diagram in Figure 1, use a preferable IPv4 address to perform VLSM. Make sure you show the subnet mask, network ID, broadcast address and the reserved subnet if available.**  
*(15 Marks)*

![[Pasted image 20250928173138.png]]


---

### **Question 7 - TCP and Error Detection**

**a) TCP implements a mechanism called the three-way handshake. State the purpose of such a mechanism.**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> **Three-Way Handshake Purpose:**
> 1. **Synchronize Sequence Numbers**: Exchange initial sequence numbers (ISN)
> 2. **Establish Connection**: Confirm bidirectional communication is possible
> 3. **Negotiate Parameters**: Window sizes, MSS (Maximum Segment Size)
> 4. **Prevent Old Duplicate Connections**: Ensure connection freshness



**b) Two 16-bit words 0011 0101 1010 1000 and 0101 1001 0000 0101 are received along with another 16-bit word, 1101 0001 0101 0010, which is the UDP checksum of the first two words. Will the receiver detect an error?**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **Checksum Verification:**
> - Word 1: 0011 0101 1010 1000 = 0x35A8
> - Word 2: 0101 1001 0000 0101 = 0x5905
> - Sum: 0x35A8 + 0x5905 = 0x8EAD
> - Add carry: 0x8EAD + 0x0001 = 0x8EAE
> - Complement: ~0x8EAE = 0x7151
> - **Result**: 0x7151 ≠ 0xD152 → **Error Detected**



**c) With reference to part 7 (b), can the receiver be certain for sure that the message was not corrupted along the way? Justify your answer with an example.**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> **No, cannot be 100% certain**
> - Checksums can miss certain error patterns
> - **Example**: If errors cancel each other in the sum
> - Data: 0x1234 + 0x5678 = 0x68AC
> - Corrupted: 0x1334 + 0x5578 = 0x68AC (same sum)
> - Checksum appears valid but data is corrupted



**d) The diagram in Figure 2 shows the establishment of a TCP connection. Complete the information in the table 1 for the TCP messages 2 and 3 according to TCP messages 1.**  
*(6 Marks)*

![[Pasted image 20250928173349.png]]


> [!Tip]- Answer (Click to show)
> **Completed TCP Handshake Table:**
> 
> | Message | ACK | SYN | FIN | Payload | Length | Seq number | Ack number |
> |---------|-----|-----|-----|---------|--------|------------|------------|
> | 1 | 0 | 1 | 0 | 0 | 0 | 500 | 0 |
> | 2 | 1 | 1 | 0 | 0 | 0 | 1000 | **501** |
> | 3 | 1 | 0 | 0 | 0 | 0 | **501** | **1001** |
> 
> **Explanation:**
> - Message 2: ACK=1, SYN=1, Ack=501 (expecting next byte after 500)
> - Message 3: ACK=1, SYN=0, Seq=501, Ack=1001 (expecting next byte after 1000)



---

**END OF EXAMINATION PAPER**


> [!SUCCESS]- **Study Tips**
> - Practice TCP sequence number calculations
> - Master VLSM subnetting techniques  
> - Understand TCP handshake and flow control
> - Review checksum calculation methods
> - Practice with different network scenarios