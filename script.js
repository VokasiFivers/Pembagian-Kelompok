const students = [
    "aliza", "anisa", "aulia", "azkha", "bagus", "melvine", "fathiya", "fatimah",
    "julian", "kamila", "kayla", "khusnul", "linda", "aal", "nadia jihan", 
    "nadia safira", "ami", "dita", "nala", "maul", "raniyah", "revita", "risda", 
    "shafa", "wahyu", "wildan", "yasser", "yeni"
];

const maleStudents = ["azkha", "bagus", "nala", "julian", "aal", "maul", "wahyu", "wildan", "yasser"];
const femaleStudents = students.filter(student => !maleStudents.includes(student));

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateGroups() {
    const groupsContainer = document.getElementById("groupsContainer");
    const groupCount = parseInt(document.getElementById("groupCount").value);

    if (groupCount < 1 || groupCount > 7) {
        alert("Jumlah kelompok harus antara 1 hingga 7.");
        return;
    }

    let shuffledMales = shuffle([...maleStudents]);
    let shuffledFemales = shuffle([...femaleStudents]);

    const groups = Array.from({ length: groupCount }, () => []);

    shuffledMales.forEach((male, index) => {
        groups[index % groupCount].push(male);
    });

    shuffledFemales.forEach((female, index) => {
        groups[index % groupCount].push(female);
    });

    displayGroups(groups);
}

function displayGroups(groups) {
    const groupsContainer = document.getElementById("groupsContainer");
    groupsContainer.innerHTML = "";

    groups.forEach((group, index) => {
        const groupDiv = document.createElement("div");
        groupDiv.classList.add("group");
        groupDiv.innerHTML = `<h3>Kelompok ${index + 1}</h3><p>${group.join(", ")}</p>`;
        groupsContainer.appendChild(groupDiv);
    });
}
