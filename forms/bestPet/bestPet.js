
let bestPetDog = ('Dogs are likely the most stereotypical pet for children – and there"s a reason for that. Most average-sized dogs are large enough to avoid being injured by your child, but many breeds are also calm and laidback with children. Dogs easily live to a decade, so you shouldn"t have to worry about having that uncomfortable conversation with your child. This species is also trainable and can usually go anywhere your child can, so they make good everyday companions.');
alert(bestPetDog);

//all lowercase = single
let replacedPetWithHamster = bestPetDog.replace("dog", "hamster");
//alert(replacedPetWithHamster);

//Uppercase = single
let replacedPetWithHamster2 = replacedPetWithHamster.replace("Dog", "Hamster");
//alert(replacedPetWithHamster2);

//all lowercase = many
let replacedPetWithHamster3 = replacedPetWithHamster2.replace("dogs", "hamsters");
//alert(replacedPetWithHamster3);

//Uppercase = many
let replacedPetWithHamster4 = replacedPetWithHamster3.replace("Dogs", "Hamsters");
alert(replacedPetWithHamster4);


