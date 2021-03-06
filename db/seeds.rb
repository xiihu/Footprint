# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# PLEASE PRETEND THAT YOU'VE SEEN NOTHING HERE!
User.create!(name:  "Hu Xi",
             email: "williamramthy@hotmail.com",
             password:              "William17NUS!",
             password_confirmation: "William17NUS!",
             admin: true, 
             activated: true,
             activated_at: Time.zone.now)

User.create!(name:  "Footprint",
             email: "yurilliam@footprint.com",
             password:              "Hangzhou",
             password_confirmation: "Hangzhou",
             admin: true, 
             activated: true,
             activated_at: Time.zone.now)

User.create!(name:  "Zhou You",
             email: "yollyhideout@gmail.com",
             password:              "zhouyou",
             password_confirmation: "zhouyou",
             admin: true, 
             activated: true,
             activated_at: Time.zone.now)



# Sample Microposts
# users = User.order(:created_at).take(6)
# 50.times do
# content = Faker::Lorem.sentence(5)
# users.each { |user| user.microposts.create!(content: content) }
#end