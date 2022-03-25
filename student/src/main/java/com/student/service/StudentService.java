package com.student.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.student.model.Student;
import com.student.repository.StudentRepository;

  
@Component
@Service
public class StudentService {

	@Autowired    
	private StudentRepository studentRepository;    
	public List<Student> getAllStudents()  
	{    
	List<Student>userRecords = new ArrayList();
	//studentRepository.findAll().forEach(userRecords::add); 
	userRecords=(List<Student>) studentRepository.findAll();
	return userRecords;    
	}    
	
	public void addUser(Student userRecord)  
	{    
		studentRepository.save(userRecord);    
	}    
	
	public void DeleteAllUser()  
	{    
		studentRepository.deleteAll();    
	}  
}
