package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="info")
public class Cricinfo {
	
	@Id
	private int id;
	private String name;
	private int matches;
	private int runs;
	private float average;
	private int best;
	public Cricinfo()
	{
		
	}
	
	
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}


	public int getMatches() {
		return matches;
	}


	public void setMatches(int matches) {
		this.matches = matches;
	}


	public int getRuns() {
		return runs;
	}


	public void setRuns(int runs) {
		this.runs = runs;
	}


	public float getAverage() {
		return average;
	}


	public void setAverage(float average) {
		this.average = average;
	}


	public int getBest() {
		return best;
	}


	public void setBest(int best) {
		this.best = best;
	}


	@Override
	public String toString() {
		return "Cricinfo [id=" + id + ", name=" + name + ", Matches=" + matches + ", Runs=" + runs + ", Average="
				+ average + ", best=" + best + "]";
	}
	

}
