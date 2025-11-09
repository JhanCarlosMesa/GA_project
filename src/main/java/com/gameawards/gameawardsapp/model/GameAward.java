package com.gameawards.gameawardsapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class GameAward {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    private Integer year;
    private String category;
    private String nominee;
    private Boolean winner;
    private String additionalInfo;
    
    // Constructors
    public GameAward() {}
    
    public GameAward(Integer year, String category, String nominee, Boolean winner, String additionalInfo) {
        this.year = year;
        this.category = category;
        this.nominee = nominee;
        this.winner = winner;
        this.additionalInfo = additionalInfo;
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public Integer getYear() {
        return year;
    }
    
    public void setYear(Integer year) {
        this.year = year;
    }
    
    public String getCategory() {
        return category;
    }
    
    public void setCategory(String category) {
        this.category = category;
    }
    
    public String getNominee() {
        return nominee;
    }
    
    public void setNominee(String nominee) {
        this.nominee = nominee;
    }
    
    public Boolean getWinner() {
        return winner;
    }
    
    public void setWinner(Boolean winner) {
        this.winner = winner;
    }
    
    public String getAdditionalInfo() {
        return additionalInfo;
    }
    
    public void setAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
    }
}