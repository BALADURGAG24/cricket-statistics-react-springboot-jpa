package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.CricService;
import com.example.demo.model.Cricinfo;

@CrossOrigin(origins = "localhost:3000")
@RestController
@RequestMapping("api/infos")
public class CricController {
	@Autowired 
	CricService f1;
	
	@GetMapping("/gets")
	public List<Cricinfo> getDetails()
	{
		System.out.println("Retrieved All the Details Present In The Table");
		return f1.getDetails();
	}

	@GetMapping("/getById/{id}")
	public Cricinfo getById(@PathVariable ("id")int id){
		return f1.getById(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteDetails(@PathVariable("id") int id)
	{
		return f1.deleteDetails(id);
	}
	
	@PostMapping("/post")
	public Cricinfo postDetails(@RequestBody Cricinfo z)
	{
	
		return f1.postDetails(z);
	}
	
	@PutMapping("/put/{id}")
	public Cricinfo updateDetails(@RequestBody Cricinfo x)
	{
		
		return f1.updateDetails(x);
		
	}


	
	@GetMapping(value = "/sort/{field}")
	Iterable<Cricinfo> employeesSort(@PathVariable ("field") String field) {
		return f1.sortEmployees(field);
	}
	@GetMapping(value = "/paging/{pageNo}/{pageSize}")
	Page<Cricinfo> employeesPaging(@PathVariable ("pageNo") int pageno,@PathVariable ("pageSize") int pageSize) {
		return f1.pagingEmployees(pageno, pageSize);
	}

	@GetMapping(value = "/pagingSorting/{pageNo}/{pageSize}/{field}")
	Page<Cricinfo> employeesPagingAndSorting(@PathVariable ("pageNo") int pageno,@PathVariable ("pageSize") int pageSize,@PathVariable ("field")String field) {
		return f1.pagingAndSortingEmployees(pageno, pageSize,field);
	}

}
