package com.gameawards.gameawardsapp.service;

import com.gameawards.gameawardsapp.model.GameAward;
import com.gameawards.gameawardsapp.repository.GameAwardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameAwardService {
    
    @Autowired
    private GameAwardRepository gameAwardRepository;
    
    public List<GameAward> getAllAwards() {
        return gameAwardRepository.findAll();
    }
    
    public List<GameAward> getAwardsByYear(Integer year) {
        return gameAwardRepository.findByYear(year);
    }
    
    public List<GameAward> getAwardsByCategory(String category) {
        return gameAwardRepository.findByCategory(category);
    }
    
    public List<GameAward> getAwardsByYearAndCategory(Integer year, String category) {
        return gameAwardRepository.findByYearAndCategory(year, category);
    }
    
    public List<GameAward> getWinners() {
        return gameAwardRepository.findByWinnerTrue();
    }
    
    public void saveAll(List<GameAward> awards) {
        gameAwardRepository.saveAll(awards);
    }
}