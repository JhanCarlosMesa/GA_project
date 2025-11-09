package com.gameawards.gameawardsapp.repository;

import com.gameawards.gameawardsapp.model.GameAward;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameAwardRepository extends JpaRepository<GameAward, Long> {
    List<GameAward> findByYear(Integer year);
    List<GameAward> findByCategory(String category);
    List<GameAward> findByYearAndCategory(Integer year, String category);
    List<GameAward> findByWinnerTrue();
}