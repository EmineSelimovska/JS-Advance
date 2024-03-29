function solve() {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const birth = document.getElementById("birth");
    const position = document.getElementById("position");
    const salary = document.getElementById("salary");
    const tbody = document.getElementById("tbody");
    const addSalary = document.getElementById("sum");
   
    document.getElementById("add-worker").addEventListener("click", (e) => {
      e.preventDefault();
      if (
        fname.value &&
        lname.value &&
        email.value &&
        birth.value &&
        position.value &&
        salary.value
      ) {
        addEmployee(
          e,
          fname.value,
          lname.value,
          email.value,
          birth.value,
          position.value,
          salary.value
        );
        clearInputFields();
      }
    });
   
    function addEmployee(e, fname, lname, email, birth, position, salary) {
      e.preventDefault();
      const tr = createElement("tr");
      createElement("td", `${fname}`, tr);
      createElement("td", `${lname}`, tr);
      createElement("td", `${email}`, tr);
      createElement("td", `${birth}`, tr);
      createElement("td", `${position}`, tr);
      createElement("td", `${salary}`, tr);
      const td = createElement("td", "", tr);
      let fireBtn = createElement("button", "Fired", td);
      fireBtn.setAttribute("class", "fired");
      let editBtn = createElement("button", "Edit", td);
      editBtn.setAttribute("class", "edit");
      tbody.appendChild(tr);

      const currentSalary = Number(addSalary.textContent);
      const salaryy = Number(salary);
      addSalary.textContent = (currentSalary + salaryy).toFixed(2);

      editBtn.addEventListener('click', (e) => editWorker(e, fname, lname, email, birth, position, salary));
      fireBtn.addEventListener('click', (e) => fireEmployee(e, salary));
    }
    function targetNode(e, salary) {
        e.preventDefault();
        e.target.parentNode.parentNode.remove();
        reduceCurrentSalarySum(salary);
    }
    function fireEmployee(e, salary) {
        targetNode(e, salary)
        
    }
    function editWorker(e,firstName,lastName,emailAddress,birthDate,currPosition,currSalary){
            targetNode(e, currSalary);
            fname.value = firstName;
            lname.value = lastName;
            email.value = emailAddress;
            birth.value = birthDate;
            position.value = currPosition;
            salary.value = currSalary;
        } 
        function reduceCurrentSalarySum(salary) {
            const sumSalary = Number(addSalary.textContent);
            addSalary.textContent = Math.abs((Number(salary) - sumSalary)).toFixed(2);
        }
        function createElement(type, content, parent) {
            const element = document.createElement(type);
            element.textContent = content;
            if (parent) {
              parent.appendChild(element);
            }
            return element;
          }
         
          function clearInputFields() {
            fname.value = "";
            lname.value = "";
            email.value = "";
            birth.value = "";
            position.value = "";
            salary.value = "";
          }

}
solve()