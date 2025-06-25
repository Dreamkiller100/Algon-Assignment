Hash:
A hash is a fixed-length string output (digest) created from any input data using a cryptographic algorithm—  SHA-256 is commonly used

Purpose: 
It ensures data integrity.Even a tiny change in the input changes the hash completely.
In blockchain, it's used to:
Identify each block uniquely.
Link blocks (via previousHash).
Prove work has been done (mining).

Nonce :
A number used once. In mining, it's incremented until the block’s hash meets a certain condition.
It's how Proof of Work (PoW) is implemented—trying random values until a valid hash is found.

Difficulty :
Determines how hard it is to mine a block.
It sets the condition that the hash must start with a specific number of zeros (e.g., "0000" if difficulty = 4).
Higher difficulty = longer mining time.
  
Genesis Block :
The first block of the blockchain.
Hardcoded with index = 0 and previousHash = '0'.
All other blocks are linked to it.
It’s manually created and has no real previous block.
