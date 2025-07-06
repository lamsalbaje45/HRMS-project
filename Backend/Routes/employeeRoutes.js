import express from 'express';
import {createEmployee,getAllEmployees, getEmployeeById,deleteEmployee,updateEmployee} from '../Controller/employeecontroller.js'; // Adjust the path as necessary
const router = express.Router();

router.post('/', createEmployee);
router.get('/', getAllEmployees); // Assuming getAllEmployees is a method in employeecontroller.js
router.get('/:id', getEmployeeById); // Assuming getEmployeeById is a method in employeecontroller.js
router.delete('/:id', deleteEmployee); // Assuming deleteEmployee is a method in employeecontroller.js
router.put('/:id', updateEmployee); // Assuming updateEmployee is a method in employeecontroller.js

export default router;