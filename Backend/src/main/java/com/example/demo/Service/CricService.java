package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.dao.CricinfoRepository;
import com.example.demo.model.Cricinfo;

@Service
public class CricService {
	@Autowired
	CricinfoRepository  i;

	public List<Cricinfo> getDetails()
	{
		return i.findAll();
	}

	public Cricinfo getById(int id){
		Optional<Cricinfo>v =   i.findById(id);
		if(v.isPresent())
		return v.get();
		else
		return null;
	}
	public String deleteDetails(int id)
	{
		i.deleteById(id);
		return "Id : "+id+" is deleted";
	}
	public Cricinfo postDetails(Cricinfo z)
	{
		return i.save(z);
	}
	public Cricinfo updateDetails(Cricinfo x)
	{
		return i.save(x);
	}
	public Iterable<Cricinfo> sortEmployees(String field) {
		return i.findAll(Sort.by(field));
	}
	public Page<Cricinfo> pagingEmployees(int page,int pageSize) {
		Pageable paging=PageRequest.of(page,pageSize);
		return i.findAll(paging);
	}
	public Page<Cricinfo> pagingAndSortingEmployees(int offset,int pageSize,String field) {
		Pageable paging = PageRequest.of(offset, pageSize).withSort(Sort.by(field));
		return i.findAll(paging);
	}


}
