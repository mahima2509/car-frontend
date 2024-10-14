package com.wipro.cabapi.restcontroller;

import java.util.List;

import com.wipro.cabapi.util.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.cabapi.dto.CabDTO;
import com.wipro.cabapi.dto.CabDriverVO;
import com.wipro.cabapi.entity.Cab;
import com.wipro.cabapi.service.ICabService;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/cabs")
public class CabRestController {

    @Autowired
    ICabService service;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    private boolean authenticate(HttpServletRequest request) {

        String token = null;
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("token".equals(cookie.getName())) {
                    token = cookie.getValue();
                    break;
                }
            }
        }

        if (token != null) {
            return jwtTokenUtil.validateToken(token);
        }
        return false;
    }


    @PostMapping(value = "/add", produces = "application/json", consumes = "application/json")
    public Cab addCab(@RequestBody CabDTO cabDTO, HttpServletRequest request) {
        if (!authenticate(request)) {
            return null;
        }
        return service.addCab(cabDTO);
    }

    @GetMapping(value = "/get/{cabId}")
    public CabDTO getCabById(@PathVariable int cabId, HttpServletRequest request) {
        if (!authenticate(request)) {
            return null;
        }
        return service.getCabById(cabId);
    }

    @GetMapping("/getall")
    public List<Cab> getAllCabs(HttpServletRequest request) {
        if (!authenticate(request)) {
            return null;
        }
        return service.getAllCabs();
    }
    /*
     * @DeleteMapping(value="/deletebyid/{cabId}", consumes = "application/json")
     * public Cab deleteCab(@RequestBody CabDTO cabDTO) { return
     * service.deleteCab(cabDTO); }
     */

    @GetMapping("/get/cab-driver/{cabId}")
    public CabDriverVO getCabAndDriverById(@PathVariable int cabId, HttpServletRequest request) {
        if (!authenticate(request)) {
            return null;
        }
        return service.getCabAndDriverById(cabId);
    }

    @DeleteMapping("/deletebyid/{cabId}")
    public String deleteCabById(@PathVariable int cabId, HttpServletRequest request) {
        if (!authenticate(request)) {
            return null;
        }
        service.deleteById(cabId);  // Call service to delete the cab
        return "Cab with ID " + cabId + " deleted successfully.";
    }


    /*
     * // @PutMapping("/update/driver-by-cab")
     *
     * @PutMapping(value="/update",produces = "application/json", consumes =
     * "application/json") public String updateDriverByCab(@RequestBody Driver
     * driver) { service.updateDriverByCab(driver); return
     * "Updated driver information."; }
     */
    @PutMapping(value = "/update/driver-by-cab", produces = "application/json", consumes = "application/json")
    public Cab updateCab(@RequestBody CabDTO cabDTO, HttpServletRequest request) {
        if (!authenticate(request)) {
            return null;
        }
        return service.updateCab(cabDTO);
    }
}
