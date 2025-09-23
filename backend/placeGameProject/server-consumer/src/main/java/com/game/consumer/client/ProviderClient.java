package com.game.consumer.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "server-provider")
public interface ProviderClient {
    
    @GetMapping("/hello")
    String hello();
}
