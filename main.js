const fs = require("fs")

const banner = "https://bafybeihhckapkhtcq4drulfmruatkhrwx76r5inesoovd6b76dccl4lqju.ipfs.nftstorage.link/";
const laser = "https://bafybeia5xf75xnvcoelprby3jorep5og4beahknedo4v55qrz4yvetrm5a.ipfs.nftstorage.link/";
const halo = "https://bafybeifbsc2plbw7wt6ysz4rtoxb4mlacngvvhcbu73qqvfty5vddxgh3q.ipfs.nftstorage.link/";

for(let i = 6; i < 10000; i++) {
	if(i % 2 === 0) {
		let fileData = ``
			fs.writeFileSync(`${i}`, JSON.stringify({
			  "name": `Under the Wicked Moon #${i}`,
			  "external_link": "https://wickedcranium.com/",
			  "image": banner,
			  "attributes": [
			    {
			      "trait_type": "Kind",
			      "value": "Banner"
			    },
			  ]
			}));
	} else {
		if (Math.random() > 0.33333333333333) {
			fs.writeFileSync(`${i}`, JSON.stringify({
			  "name": `Under the Wicked Moon #${i}`,
			  "external_link": "https://wickedcranium.com/",
			  "image": laser,
			  "attributes": [
			    {
			      "trait_type": "Kind",
			      "value": "Laser PFP"
			    },
			  ]
			}));
		} else {
			fs.writeFileSync(`${i}`, JSON.stringify({
			  "name": `Under the Wicked Moon #${i}`,
			  "external_link": "https://wickedcranium.com/",
			  "image": halo,
			  "attributes": [
			    {
			      "trait_type": "Kind",
			      "value": "Halo PFP"
			    },
			  ]
			}));
		}
		
	}
}
