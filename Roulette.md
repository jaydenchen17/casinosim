---
layout: default
title: Roulette
permalink: /Roulette
---
import pygame
import sys
import random

# Initialize Pygame
pygame.init()

# Constants
WIDTH, HEIGHT = 800, 600
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)
FONT = pygame.font.Font(None, 36)

# Function to draw the wheel
def draw_wheel():
    pygame.draw.circle(screen, BLACK, (WIDTH // 2, HEIGHT // 2), 200)
    pygame.draw.circle(screen, RED, (WIDTH // 2, HEIGHT // 2), 180)

# Function to draw the ball
def draw_ball(ball_pos):
    pygame.draw.circle(screen, WHITE, ball_pos, 10)

# Main function
def main():
    # Set up the screen
    screen = pygame.display.set_mode((WIDTH, HEIGHT))
    pygame.display.set_caption("Roulette Game")

    # Initialize clock
    clock = pygame.time.Clock()

    # Initial ball position
    ball_pos = [WIDTH // 2, HEIGHT // 2]

    # Game loop
    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

        # Update ball position (simulate the spinning)
        ball_pos[0] += random.randint(-5, 5)
        ball_pos[1] += random.randint(-5, 5)

        # Draw the wheel and ball
        screen.fill(WHITE)
        draw_wheel()
        draw_ball(ball_pos)

        # Update the display
        pygame.display.flip()

        # Set the frame rate
        clock.tick(30)

if __name__ == "__main__":
    main()
