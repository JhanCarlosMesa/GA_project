package com.gameawards.gameawardsapp.controller;

import com.gameawards.gameawardsapp.model.GameAward;
import com.gameawards.gameawardsapp.service.GameAwardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class GameAwardController {
    
    @Autowired
    private GameAwardService gameAwardService;
    
    @GetMapping("/")
    public String home(Model model) {
        List<GameAward> awards = gameAwardService.getAllAwards();
        model.addAttribute("awards", awards);
        return "index";
    }
    
    @GetMapping("/year")
    public String getByYear(@RequestParam Integer year, Model model) {
        List<GameAward> awards = gameAwardService.getAwardsByYear(year);
        model.addAttribute("awards", awards);
        model.addAttribute("year", year);
        return "index";
    }
    
    @GetMapping("/category")
    public String getByCategory(@RequestParam String category, Model model) {
        List<GameAward> awards = gameAwardService.getAwardsByCategory(category);
        model.addAttribute("awards", awards);
        model.addAttribute("category", category);
        return "index";
    }
    
    @GetMapping("/year-category")
    public String getByYearAndCategory(@RequestParam Integer year, @RequestParam String category, Model model) {
        List<GameAward> awards = gameAwardService.getAwardsByYearAndCategory(year, category);
        model.addAttribute("awards", awards);
        model.addAttribute("year", year);
        model.addAttribute("category", category);
        return "index";
    }
}