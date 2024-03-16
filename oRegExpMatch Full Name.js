function matchFullName(input) {
    let newArr = input.split(', ');
    let finalArr = [];

    for (let i = 0; i < newArr.length; i++) {
        let fullName = newArr[i];
        let firstName = fullName.split(' ')[0];
        let lastName = fullName.split(' ')[1];

        if (firstName[0] === firstName[0].toUpperCase() && firstName.slice(1).toLowerCase() === firstName.slice(1) &&
            lastName[0] === lastName[0].toUpperCase() && lastName.slice(1).toLowerCase() === lastName.slice(1)) {
            finalArr.push(fullName);
        }
    }

    console.log(finalArr.join(` `));
}
matchFullName("Ivan Ivanov, Miroslav Tzarev, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");
//matchFullName();