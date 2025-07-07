// Test setup file for vitest
import { vi } from "vitest";

// Mock axios globally for testing
vi.mock("axios", () => ({
  default: {
    post: vi.fn(),
  },
}));
