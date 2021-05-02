import memberModel from "./memberModel";

export function getAll() {
    return new Promise((resolve, reject) => {
        memberModel.find({}, (err, members) => {
            if (err) {
                reject(err);
            } else {
                resolve(members);
            }
        })
    })
}
export function getById(id) {
    return new Promise((resolve, reject) => {
        memberModel.findById(id, (err, member) => {
            if (err) {
                reject(err);
            } else {
                resolve(member);
            }
        })
    })
}
export function create(memberData) {
    return new Promise((resolve, reject) => {
        let newMember = new memberModel({
            name: memberData.name,
            city: memberData.city,
            email: memberData.email
        });

        newMember.save((err) => {
            if (err) {
                reject(err);
            } else {
                resolve('Member created successfully!');
            }
        });
    });
}
export function update(id, memberData)
{
    return new Promise((resolve,reject) => {
        memberModel.findByIdAndUpdate(id,
            {
                name: memberData.name,
                city: memberData.city,
                email: memberData.email
            }, (err) => {
                if(err) {
                    reject(err)
                } else {
                    resolve('Member updated successfully!')
                }
            });
    });
}
export function deleteById(id) {
    return new Promise((resolve,reject) => {
        memberModel.findByIdAndDelete(id, (err) => {
                if(err) {
                    reject(err);
                } else {
                    resolve('Member deleted successfully!');
                }
            });    
    });
}
