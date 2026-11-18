import React from "react";

export default function Admin() {
  return (
    <div id="Admin">
      <div id="formSection">
        <form>
          <div>
            <p>Type Your First Name:</p>
            <input name="firstName" type="text" placeholder="firstName" />
          </div>

          <div>
            <p>Type Your Last Name:</p>
            <input name="lastName" type="text" placeholder="lastName" />
          </div>

          <div>
            <p>Type Your Age:</p>
            <input name="age" type="number" placeholder="age" />
          </div>

          {/* Gender */}
          <div>
            <p>Gender:</p>
            <div>
              <input type="radio" id="male" name="gender" value="male" />
              <label for="male">Male</label>
              <input type="radio" id="female" name="gender" value="female" />
              <label for="female">Female</label>
            </div>
          </div>

          {/* City */}
          <div>
            <p>Type Which City Your Are Working:</p>
            <input name="city" type="text" placeholder="city" />
          </div>

          <div>
            <p>Type Your Job Profile:</p>
            <select name="jobProfile" id="jobProfile">
              <option value="FullStack">Ai</option>
              <option value="FullStack">Data Science</option>
              <option value="FullStack">FullStack</option>
              <option value="FrontEnd">FrontEnd</option>
              <option value="BackEnd">BackEnd</option>
              <option value="Tester">Tester</option>
            </select>
          </div>

          <div>
            <p>Type Your Salary:</p>
            <input name="salary" type="number" placeholder="salary" />
          </div>

          <button>Add Employee</button>
        </form>
      </div>

      <div id="tableSection">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>City</th>
              <th>Job Profile</th>
              <th>Salary</th>
            </tr>
          </thead>

          <tbody>
            {/* Dummy Data */}
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>25</td>
              <td>Male</td>
              <td>New York</td>
              <td>FullStack</td>
              <td>$5000</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Jane Doe</td>
              <td>21</td>
              <td>Femsle</td>
              <td>New York</td>
              <td>Ai</td>
              <td>$7000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
