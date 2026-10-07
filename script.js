function showPet() {

    document.querySelector(".welcome").style.display = "none";
    document.querySelector(".pet-card").style.display = "none";
    document.querySelector(".today").style.display = "none";

    document.getElementById("petPage").style.display = "block";

    document.querySelector(".bottom-menu").style.display = "none";
}


function showHome() {

    document.querySelector(".welcome").style.display = "block";
    document.querySelector(".pet-card").style.display = "flex";
    document.querySelector(".today").style.display = "block";

    document.getElementById("petPage").style.display = "none";
    document.getElementById("petForm").style.display = "none";

    document.querySelector(".bottom-menu").style.display = "flex";
}


function openPetForm() {

    document.getElementById("petPage").style.display = "none";

    document.getElementById("petForm").style.display = "block";
}


function closePetForm() {

    document.getElementById("petForm").style.display = "none";

    document.getElementById("petPage").style.display = "block";
}


function savePet() {

    const name = document.getElementById("nameInput").value;
    const breed = document.getElementById("breedInput").value;
    const weight = document.getElementById("weightInput").value;
    const animal = document.getElementById("animalInput").value;


    if (name === "") {

        alert("Введите имя питомца!");

        return;
    }


    document.getElementById("petName").textContent = name;

    document.getElementById("petBreed").textContent = breed;

    document.getElementById("petWeight").textContent = weight + " кг";

    document.getElementById("petPhoto").textContent = animal;


    const pet = {

        name: name,

        breed: breed,

        weight: weight,

        animal: animal

    };


    localStorage.setItem("petCarePet", JSON.stringify(pet));


    document.getElementById("petForm").style.display = "none";

    document.getElementById("petPage").style.display = "block";
}


function loadPet() {

    const savedPet = localStorage.getItem("petCarePet");


    if (savedPet) {

        const pet = JSON.parse(savedPet);


        document.getElementById("petName").textContent = pet.name;

        document.getElementById("petBreed").textContent = pet.breed;

        document.getElementById("petWeight").textContent = pet.weight + " кг";

        document.getElementById("petPhoto").textContent = pet.animal;
    }
}


loadPet();