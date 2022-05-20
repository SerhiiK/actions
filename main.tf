terraform {
  required_providers {
    google = {
      source = "hashicorp/google"
      version = "3.5.0"
    }
  }
}

provider "google" {
  project = "apt-memento-347706"
  region  = "us-central1"
  zone    = "us-central1-c"
}

resource "google_compute_network" "vpc_network_default_maybe" {
  name = var.vpc_name
  description = "bla bla bla more bla"
}

resource "google_compute_backend_bucket" "image_backend" {
  name        = var.image_name
  description = "Contains beautiful images"
  bucket_name = google_storage_bucket.image_bucket.name
  enable_cdn  = true
}

resource "google_storage_bucket" "image_bucket" {
  name     = "image-store-bucket"
  location = "EU"
}
