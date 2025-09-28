#### **COMPUTER NETWORKING PROTOCOLS EXAMINATION**  

**CN 211 - UNIVERSITY OF DODOMA**  
**End of Semester One - 2017/2018 Academic Year**

---

## **SECTION A: (40 MARKS)**

### **Question One**

**i. Mention three elements of a protocol.**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> **Three Elements of a Protocol:**
> 1. **Syntax**: Structure and format of data (data representation, signal levels)
> 2. **Semantics**: Meaning of each section of bits (control information, error handling)
> 3. **Timing**: When data should be sent and how fast (synchronization, sequencing)


**ii. Describe five advantages of layered approach in implementing a computer communication network.**  
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> **Advantages of Layered Approach:**
> 1. **Modularity**: Each layer can be developed and modified independently
> 2. **Interoperability**: Standard interfaces between layers enable different implementations
> 3. **Easier Troubleshooting**: Problems can be isolated to specific layers
> 4. **Technology Independence**: Lower layers can change without affecting upper layers
> 5. **Simplified Design**: Complex network functions are broken into manageable pieces
> 6. **Standardization**: Promotes industry standards and compatibility



**iii. Differentiate the error control mechanisms performed by datalink from that performed by the transport layer as described in the OSI model.**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> **Error Control Mechanisms:**
> - **Data Link Layer**: Error detection and correction between adjacent nodes (single hop)
> - **Transport Layer**: End-to-end error control between source and destination hosts
> - **Datalink**: Uses CRC for error detection, may retransmit frames
> - **Transport**: Uses sequence numbers, acknowledgements, and retransmissions

---

### **Question Two**

**i. Compare and contrast the layers found in OSI and TCP/IP models.**  
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> **OSI vs TCP/IP Layer Comparison:**
> 
> | OSI Model | TCP/IP Model | Functions |
> |-----------|--------------|-----------|
> | Application | Application | User interfaces, network services |
> | Presentation | Application | Data formatting, encryption, compression |
> | Session | Application | Dialog control, synchronization |
> | Transport | Transport | End-to-end delivery, error recovery |
> | Network | Internet | Routing, logical addressing |
> | Data Link | Network Access | Frame delivery, MAC addressing |
> | Physical | Network Access | Physical transmission, signaling |
> 
> **Key Differences:**
> - OSI has 7 layers, TCP/IP has 4 layers
> - OSI is theoretical, TCP/IP is practical implementation
> - TCP/IP combines upper OSI layers into Application layer



**ii. Mention the four levels of addresses used in an internet employing the TCP/IP protocols.**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **Four Levels of Addresses in TCP/IP:**
> 1. **Physical Address (MAC)**: Hardware address of network interface
> 2. **Logical Address (IP)**: Network layer address for routing
> 3. **Port Address**: Transport layer address for process identification
> 4. **Specific Address**: Application-specific addresses (email, URLs)



**iii. What is encapsulation as applied in layered approach?**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **Encapsulation:**
> - Process of adding headers (and sometimes trailers) to data as it moves down the protocol stack
> - Each layer adds its own control information to the Protocol Data Unit (PDU)
> - Data → Segment → Packet → Frame → Bits

---

### **Question Three**

**i. Describe the classical addressing scheme?**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> **Classical (Classful) Addressing Scheme:**
> - IPv4 addresses divided into fixed classes: A, B, C, D, E
> - **Class A**: 0.0.0.0 - 127.255.255.255 (/8) - Large networks
> - **Class B**: 128.0.0.0 - 191.255.255.255 (/16) - Medium networks
> - **Class C**: 192.0.0.0 - 223.255.255.255 (/24) - Small networks
> - **Class D**: Multicast addresses
> - **Class E**: Experimental addresses
> - Rigid structure leading to address wastage



**ii. An address in a block is given as 180.8.17.9. Find the number of addresses in the block, the first address, and the last address.**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **Address Analysis for 180.8.17.9:**
> - **Class**: Class B (180 = 10110100 binary, starts with 10)
> - **Default Mask**: /16 (255.255.0.0)
> - **Network Address**: 180.8.0.0
> - **Number of Addresses**: 2^16 = 65,536
> - **First Address**: 180.8.0.0 (Network address)
> - **Last Address**: 180.8.255.255 (Broadcast address)
> - **Usable Hosts**: 65,534



**iii. A router receives a packet with the destination address 201.24.67.32. Show how the router finds the network address of the packet.**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **Router Network Address Determination:**
> 1. **Identify Address Class**: 201 = 11001001 binary → Class C (starts with 110)
> 2. **Apply Default Mask**: Class C uses /24 (255.255.255.0)
> 3. **Perform AND Operation**:
>    - IP: 201.24.67.32 = 11001001.00011000.01000011.00100000
>    - Mask: 255.255.255.0 = 11111111.11111111.11111111.00000000
>    - Result: 11001001.00011000.01000011.00000000 = 201.24.67.0
> 4. **Network Address**: 201.24.67.0

---

### **Question Four**

**i. What is a classless addressing scheme?**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> **Classless Addressing Scheme:**
> - Flexible IP address allocation using CIDR (Classless Inter-Domain Routing)
> - Uses Variable Length Subnet Masking (VLSM)
> - Network portion indicated by prefix length (e.g., /24, /26)
> - Eliminates rigid class boundaries, reduces address wastage
> - Enables route aggregation and efficient address space utilization



**ii. One of the addresses in a block is 17.63.110.114/24. Find the number of addresses, the first address, and the last address in the block.**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> **Address Analysis for 17.63.110.114/24:**
> - **Prefix Length**: /24
> - **Host Bits**: 32 - 24 = 8 bits
> - **Number of Addresses**: 2^8 = 256
> - **First Address**: 17.63.110.0 (Network address)
> - **Last Address**: 17.63.110.255 (Broadcast address)
> - **Usable Hosts**: 254



**iii. An organization is granted the block 130.34.12.64/26. The organization needs four subnetworks, each with an equal number of hosts. Design the subnetworks and find the information about each network.**  
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> **Subnet Design for 130.34.12.64/26:**
> 
> **Original Block**: 130.34.12.64/26
> - Total addresses: 2^(32-26) = 64 addresses
> - Need 4 subnets → 2 extra bits for subnetting (2^2 = 4 subnets)
> - **New prefix**: /28 (26 + 2 = 28)
> - **Hosts per subnet**: 2^(32-28) - 2 = 16 - 2 = 14 usable hosts
> 
> **Subnet Information:**
> 
> | Subnet | Network Address | Usable Range | Broadcast |
> |--------|-----------------|--------------|-----------|
> | 1 | 130.34.12.64/28 | 130.34.12.65-78 | 130.34.12.79 |
> | 2 | 130.34.12.80/28 | 130.34.12.81-94 | 130.34.12.95 |
> | 3 | 130.34.12.96/28 | 130.34.12.97-110 | 130.34.12.111 |
> | 4 | 130.34.12.112/28 | 130.34.12.113-126 | 130.34.12.127 |

---

## **SECTION B: (60 MARKS)**  
*Attempt any TWO (2) out of THREE (3) questions.*


### **Question Five**

**i. I want to ping all hosts on the subnet 129.101.55, show how this is done.**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> **Ping All Hosts on Subnet:**
> - **Command**: `ping 129.101.55.255` (broadcast address)
> - **Alternative**: Use network scanning tools like `nmap`
> - **Example**: `nmap -sn 129.101.55.0/24`
> - **Note**: Broadcast ping may be blocked by firewalls; ICMP echo to broadcast address



**ii. Compare and contrast between Boot Strap Protocol (BOOTP) and Dynamic Host Configuration Protocol (DHCP)**  
*(6 Marks)*

> [!Tip]- Answer (Click to show)
> **BOOTP vs DHCP Comparison:**
> 
> | Feature | BOOTP | DHCP |
> |---------|-------|------|
> | **Address Assignment** | Static mapping | Dynamic and static |
> | **Lease Time** | Permanent | Temporary (configurable) |
> | **Configuration** | Limited parameters | Comprehensive TCP/IP config |
> | **Message Types** | Few message types | Multiple message types |
> | **Relay Agents** | Supported | Enhanced support |
> | **Backward Compatibility** | N/A | Compatible with BOOTP |
> | **Efficiency** | Less efficient | More efficient address reuse |
> | **Client Identification** | MAC address only | Multiple methods |



**iii. Write down the four advantages of layered network architecture**  
*(8 Marks)*

> [!Tip]- Answer (Click to show)
> **Advantages of Layered Network Architecture:**
> 1. **Modular Design**: Each layer can be developed, tested, and modified independently
> 2. **Interoperability**: Standard interfaces allow different vendors' equipment to work together
> 3. **Easier Troubleshooting**: Problems can be isolated to specific layers for faster resolution
> 4. **Technology Independence**: Lower layers can be upgraded without affecting upper layers
> 5. **Simplified Learning**: Complex networks are easier to understand when divided into layers
> 6. **Standardization**: Promotes industry standards and protocol development
> 7. **Flexibility**: New technologies can be integrated without redesigning entire system
> 8. **Reusability**: Common functions can be reused across different network implementations



**iv. OSI model has seven layers. Write down functions performed by each layer.**  
*(14 Marks)*

> [!Tip]- Answer (Click to show)
> **OSI Model Seven Layers and Functions:**
> 
> 1. **Physical Layer**:
>    - Transmits raw bit stream over physical medium
>    - Defines electrical, mechanical, and functional specifications
>    - Handles voltage levels, connector types, cable specifications
> 
> 2. **Data Link Layer**:
>    - Provides node-to-node data transfer
>    - Error detection and correction
>    - Framing, physical addressing (MAC addresses)
>    - Flow control and media access control
> 
> 3. **Network Layer**:
>    - Provides end-to-end packet delivery
>    - Logical addressing (IP addresses)
>    - Routing and path determination
>    - Packet forwarding and fragmentation
> 
> 4. **Transport Layer**:
>    - Provides reliable process-to-process message delivery
>    - Error recovery and flow control
>    - Segmentation and reassembly
>    - Connection establishment and termination
> 
> 5. **Session Layer**:
>    - Establishes, manages, and terminates connections
>    - Dialog control and synchronization
>    - Manages who transmits when
> 
> 6. **Presentation Layer**:
>    - Data translation, encryption, and compression
>    - Protocol conversion and character encoding
>    - Ensures data is readable by receiving system
> 
> 7. **Application Layer**:
>    - Provides network services to user applications
>    - File transfer, email, remote login
>    - Network virtual terminal services

---

### **Question Six**

**i. What is the strength of FTP over TFTP?**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **FTP Strengths over TFTP:**
> 1. **Reliability**: FTP uses TCP for reliable transfer, TFTP uses UDP (unreliable)
> 2. **Authentication**: FTP supports username/password authentication
> 3. **Directory Operations**: FTP supports directory listing, navigation, and management
> 4. **File Management**: FTP allows file renaming, deletion, and permission setting
> 5. **Error Recovery**: FTP has robust error checking and recovery mechanisms
> 6. **Transfer Modes**: Supports ASCII and binary transfer modes
> 7. **Large Files**: Better suited for large file transfers with flow control



**ii. Describe four scenarios which can be used to implement the transfer of email from source to the destination.**  
*(8 Marks)*

> [!Tip]- Answer (Click to show)
> **Email Transfer Scenarios:**
> 1. **Direct SMTP Transfer**:
>    - Source → SMTP → Destination (both online)
>    - Immediate delivery when both servers are available
> 
> 2. **Store-and-Forward**:
>    - Source → SMTP → Intermediate Server → SMTP → Destination
>    - Handles temporary destination unavailability
> 
> 3. **POP3/IMAP Retrieval**:
>    - Source → SMTP → Mail Server → POP3/IMAP → Client
>    - Client pulls messages from server
> 
> 4. **Webmail Access**:
>    - Source → SMTP → Webmail Server → HTTP/HTTPS → Browser
>    - Browser-based email access
> 
> 5. **Gateway Transfer**:
>    - Different email systems (e.g., corporate to internet)
>    - Protocol translation between different mail systems



**iii. Mention and describe three important protocols which are necessary for sending and receiving email.**  
*(6 Marks)*

> [!Tip]- Answer (Click to show)
> **Essential Email Protocols:**
> 1. **SMTP (Simple Mail Transfer Protocol)**:
>    - Used for sending email between servers
>    - Operates on port 25 (standard) or 587 (submission)
>    - Handles message routing and delivery
> 
> 2. **POP3 (Post Office Protocol version 3)**:
>    - Used by email clients to retrieve messages from server
>    - Operates on port 110
>    - Typically downloads messages to local client
> 
> 3. **IMAP (Internet Message Access Protocol)**:
>    - Used by email clients to access messages on server
>    - Operates on port 143
>    - Maintains messages on server, supports multiple folders
> 
> 4. **HTTP/HTTPS**:
>    - Used for webmail access through browsers
>    - Ports 80 (HTTP) and 443 (HTTPS)



**iv. Differentiate between ARP and RARP**  
*(8 Marks)*

> [!Tip]- Answer (Click to show)
> **ARP vs RARP:**
> 
> | Feature | ARP (Address Resolution Protocol) | RARP (Reverse ARP) |
> |---------|-----------------------------------|---------------------|
> | **Purpose** | Maps IP address to MAC address | Maps MAC address to IP address |
> | **Operation** | "Who has this IP? Tell me your MAC" | "Who has this MAC? Tell me my IP" |
> | **Usage** | Common in all IP networks | Largely obsolete, replaced by DHCP |
> | **Packet Type** | ARP Request/Reply | RARP Request/Reply |
> | **Layer** | Network Layer (Layer 3) | Network Layer (Layer 3) |
> | **Configuration** | Dynamic, automatic | Requires manual configuration of table |
> | **Modern Replacement** | Still widely used | Replaced by DHCP and BOOTP |
> | **Example** | PC knows IP, needs MAC | Diskless workstation knows MAC, needs IP |



**v. What is hypertext transfer protocol?**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **HTTP (Hypertext Transfer Protocol):**
> - Application layer protocol for distributed, collaborative hypermedia information systems
> - Foundation of data communication for the World Wide Web
> - Uses client-server model (browser = client, web server = server)
> - **Port 80** for standard HTTP, **Port 443** for HTTPS (secure)
> - Stateless protocol (each request independent)
> - Uses methods: GET, POST, PUT, DELETE, etc.
> - Transfers web pages, images, videos, and other web resources

---

### **Question Seven**

**i. Give five differences between UDP and TCP protocols.**  
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> **UDP vs TCP Differences:**
> 1. **Connection**: UDP is connectionless, TCP is connection-oriented
> 2. **Reliability**: UDP is unreliable (no delivery guarantees), TCP is reliable
> 3. **Ordering**: UDP doesn't guarantee order, TCP maintains packet sequence
> 4. **Speed**: UDP is faster (less overhead), TCP is slower but reliable
> 5. **Flow Control**: UDP has no flow control, TCP implements sliding window
> 6. **Congestion Control**: UDP has none, TCP adapts to network congestion
> 7. **Header Size**: UDP header = 8 bytes, TCP header = 20-60 bytes
> 8. **Usage**: UDP for real-time apps, TCP for reliable data transfer



**ii. Mention two techniques used by TCP to enhance flow control.**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **TCP Flow Control Techniques:**
> 1. **Sliding Window Protocol**:
>    - Receiver advertises window size indicating available buffer space
>    - Sender can only send data within the advertised window
>    - Window slides as acknowledgements are received
> 
> 2. **Congestion Avoidance Algorithms**:
>    - Slow Start: Exponential window increase initially
>    - Congestion Avoidance: Additive increase after threshold
>    - Fast Retransmit: Retransmit on duplicate ACKs
>    - Fast Recovery: Resume transmission quickly after loss



**iii. Assume a network has a packet size of 1000 octets, a throughput capacity of 2 Mbps, and a delay of 50 milliseconds.**
**a) Find the rate of data transferred;**  
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> **Data Transfer Rate Calculation:**
> - **Packet Size**: 1000 octets = 8000 bits
> - **Throughput Capacity**: 2 Mbps = 2,000,000 bps
> - **Delay**: 50 ms = 0.05 seconds
> - **Time to send one packet** = Packet size / Capacity = 8000 / 2,000,000 = 0.004 seconds
> - **Total time per packet** = Send time + Delay = 0.004 + 0.05 = 0.054 seconds
> - **Packets per second** = 1 / 0.054 ≈ 18.52 packets/second
> - **Data Rate** = 18.52 packets/sec × 8000 bits/packet = **148,160 bps**



**b) Find efficiency of applied technique over hardware capacity.**  
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> **Efficiency Calculation:**
> - **Actual Data Rate**: 148,160 bps (from part a)
> - **Hardware Capacity**: 2,000,000 bps
> - **Efficiency** = (Actual Rate / Hardware Capacity) × 100%
> - **Efficiency** = (148,160 / 2,000,000) × 100% = **7.408%**
> - **Low efficiency due to high delay relative to packet transmission time**



**iv. A company offering web-based services wants to reduce the amount of traffic going to its service provider generated by its customers. If you have been consulted by the company, what technical advice are you going to give, and what strategies are you going to offer them?**  
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> **Traffic Reduction Strategies:**
> 1. **Implement Caching**:
>    - Web proxy servers to cache frequently accessed content
>    - Content Delivery Network (CDN) for static resources
> 
> 2. **Compression Techniques**:
>    - Enable GZIP compression on web servers
>    - Compress images and multimedia content
> 
> 3. **Traffic Optimization**:
>    - Implement Quality of Service (QoS) policies
>    - Use traffic shaping and bandwidth management
> 
> 4. **Content Optimization**:
>    - Minimize HTTP requests
>    - Optimize database queries and application logic
> 
> 5. **Alternative Access Methods**:
>    - Implement peer-to-peer content distribution
>    - Use multicast for streaming content



**v. What is telnet? Describe three features of telnet.**  
*(6 Marks)*

> [!Tip]- Answer (Click to show)
> **Telnet (Telecommunication Network):**
> - Network protocol used for bidirectional interactive text-oriented communication
> - Provides virtual terminal access to remote hosts
> - Operates on port 23
> 
> **Three Features of Telnet:**
> 1. **Remote Terminal Access**: Allows users to log into remote systems as if using local terminal
> 2. **Platform Independence**: Works across different operating systems and hardware
> 3. **Network Virtual Terminal (NVT)**: Standard interface that maps local terminal characteristics to network standard
> 4. **Option Negotiation**: Client and server can negotiate features and capabilities
> 5. **Bidirectional Communication**: Full-duplex communication between client and server


---

**END OF EXAMINATION PAPER**


> [!SUCCESS]- **Study Tips**
> - Master OSI and TCP/IP model layers and their functions
> - Practice subnetting and CIDR calculations
> - Understand email protocols (SMTP, POP3, IMAP)
> - Learn TCP vs UDP differences and applications
> - Practice network efficiency calculations